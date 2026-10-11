"use strict";

import fs from 'fs';
import path from 'path';
import { Module } from '../module-api/module.mjs';
import { defaultResolver, LibraryResolver } from './resolver.mjs';

/**
 * Library metadata and collection container.
 */
export class Library {
    /**
     * @param {Object} options
     * @param {string} options.name - Name of the library (e.g. 'UniBo', 'Standard')
     * @param {string} [options.version='1.0.0']
     * @param {string} [options.description='']
     * @param {string} [options.path=''] - Filesystem directory path
     * @param {string} [options.verilogBundle=''] - Verilog source bundle for synthesis
     * @param {boolean} [options.builtin=false] - Whether this is a built-in library
     */
    constructor(options = {}) {
        if (!options.name) {
            throw new Error("Library requires a 'name'");
        }
        this.name = String(options.name).trim();
        this.version = options.version || '1.0.0';
        this.description = options.description || '';
        this.path = options.path ? path.normalize(options.path) : '';
        this.verilogBundle = options.verilogBundle || '';
        this.builtin = Boolean(options.builtin);
        /** @type {Map<string, Module>} */
        this.modules = new Map();
    }

    /**
     * Register a module in this library.
     * @param {Module|Object} moduleDef
     * @returns {Module}
     */
    registerModule(moduleDef) {
        const mod = moduleDef instanceof Module ? moduleDef : new Module(moduleDef);
        this.modules.set(mod.name, mod);
        return mod;
    }

    /**
     * Get a module by name.
     * @param {string} name
     * @returns {Module|undefined}
     */
    getModule(name) {
        return this.modules.get(name);
    }

    /**
     * Return all registered module names.
     * @returns {string[]}
     */
    getModuleNames() {
        return Array.from(this.modules.keys());
    }

    /**
     * Returns all registered modules.
     * @returns {Module[]}
     */
    getAllModules() {
        return Array.from(this.modules.values());
    }
}

/**
 * Global Library Registry.
 * Allows managing both built-in (`src/libraries/`) and custom user-provided libraries.
 */
export class LibraryRegistry {
    /**
     * @param {Object} [options={}]
     * @param {LibraryResolver} [options.resolver]
     */
    constructor(options = {}) {
        /** @type {Map<string, Library>} */
        this.libraries = new Map();
        this.activeLibraryName = null;
        this.resolver = options.resolver || defaultResolver;
    }

    /**
     * Register a new library.
     * @param {Library|Object} library
     * @returns {Library}
     */
    register(library) {
        if (!(library instanceof Library)) {
            library = new Library(library);
        }
        this.libraries.set(library.name, library);
        if (!this.activeLibraryName) {
            this.activeLibraryName = library.name;
        }
        if (library.path) {
            this.resolver.addSearchPath(library.path);
        }
        return library;
    }

    /**
     * Unregister a library by name.
     * @param {string} name
     * @returns {boolean}
     */
    unregister(name) {
        const removed = this.libraries.delete(name);
        if (this.activeLibraryName === name) {
            const keys = Array.from(this.libraries.keys());
            this.activeLibraryName = keys.length > 0 ? keys[0] : null;
        }
        return removed;
    }

    /**
     * Get a library by name.
     * @param {string} name
     * @returns {Library|undefined}
     */
    get(name) {
        return this.libraries.get(name);
    }

    /**
     * Check if a library is registered.
     * @param {string} name
     * @returns {boolean}
     */
    has(name) {
        return this.libraries.has(name);
    }

    /**
     * Return all registered libraries.
     * @returns {Library[]}
     */
    getAllLibraries() {
        return Array.from(this.libraries.values());
    }

    /**
     * Get active library.
     * @returns {Library|undefined}
     */
    getActive() {
        return this.libraries.get(this.activeLibraryName);
    }

    /**
     * Set active library.
     * @param {string} name
     */
    setActive(name) {
        if (this.libraries.has(name)) {
            this.activeLibraryName = name;
        } else {
            console.warn(`Library '${name}' is not registered.`);
        }
    }

    /**
     * Find a module definition across registered libraries.
     * Searches active library first.
     * @param {string} moduleName
     * @returns {Module|undefined}
     */
    findModule(moduleName) {
        const active = this.getActive();
        if (active && active.getModule(moduleName)) {
            return active.getModule(moduleName);
        }
        for (const lib of this.libraries.values()) {
            const mod = lib.getModule(moduleName);
            if (mod) return mod;
        }
        return undefined;
    }

    /**
     * Aggregate all Verilog code bundles from registered libraries for synthesis.
     * @returns {string}
     */
    getCombinedVerilogBundle() {
        const bundles = [];
        for (const lib of this.libraries.values()) {
            if (lib.verilogBundle) {
                bundles.push(`// --- Library: ${lib.name} v${lib.version} ---\n${lib.verilogBundle}`);
            }
        }
        return bundles.join('\n\n');
    }

    /**
     * Loads a custom external library from a directory path.
     * Reads `library.json` and associated Verilog files (`modules.v` or specified entry).
     * @param {string} dirPath
     * @returns {Library}
     */
    loadFromDirectory(dirPath) {
        const resolvedDir = path.isAbsolute(dirPath) ? dirPath : path.resolve(process.cwd(), dirPath);
        if (!fs.existsSync(resolvedDir) || !fs.statSync(resolvedDir).isDirectory()) {
            throw new Error(`Directory not found or not a directory: '${resolvedDir}'`);
        }

        const manifestPath = path.join(resolvedDir, 'library.json');
        let manifest = {};
        if (fs.existsSync(manifestPath)) {
            try {
                manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            } catch (err) {
                throw new Error(`Failed to parse library.json in '${resolvedDir}': ${err.message}`);
            }
        }
        manifest = (manifest && typeof manifest === 'object' && !Array.isArray(manifest)) ? manifest : {};

        const libName = manifest.name || path.basename(resolvedDir);
        let verilogBundle = '';

        const verilogEntry = (manifest.verilogEntry && typeof manifest.verilogEntry === 'string') ? manifest.verilogEntry : 'modules.v';
        const verilogFile = path.resolve(resolvedDir, verilogEntry);
        const relPath = path.relative(resolvedDir, verilogFile);
        if (relPath.startsWith('..') || path.isAbsolute(verilogEntry)) {
            throw new Error(`Security error: verilogEntry path '${verilogEntry}' escapes library directory '${resolvedDir}'`);
        }
        if (fs.existsSync(verilogFile)) {
            verilogBundle = fs.readFileSync(verilogFile, 'utf8');
        }

        const lib = new Library({
            name: libName,
            version: manifest.version || '1.0.0',
            description: manifest.description || '',
            path: resolvedDir,
            verilogBundle,
            builtin: false
        });

        // Register any module names declared in manifest
        if (Array.isArray(manifest.modules)) {
            for (const modName of manifest.modules) {
                if (typeof modName === 'string') {
                    lib.registerModule(new Module({ name: modName }));
                }
            }
        }

        this.register(lib);
        return lib;
    }

    /**
     * Discovers and registers all libraries found across resolver search paths.
     * @returns {Library[]}
     */
    discoverAndRegisterAll() {
        const discovered = this.resolver.discoverLibraries();
        const registered = [];

        for (const info of discovered) {
            if (!this.has(info.name)) {
                try {
                    const lib = this.loadFromDirectory(info.dir);
                    registered.push(lib);
                } catch (_) {}
            }
        }

        return registered;
    }
}

export const registry = new LibraryRegistry();
