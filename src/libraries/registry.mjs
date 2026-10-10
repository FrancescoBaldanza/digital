"use strict";

import { Module } from '../module-api/module.mjs';

/**
 * Library metadata and collection container.
 */
export class Library {
    /**
     * @param {Object} options
     * @param {string} options.name - Name of the library (e.g. 'UniBo', 'Standard')
     * @param {string} [options.version='1.0.0']
     * @param {string} [options.description='']
     * @param {string} [options.verilogBundle=''] - Verilog source bundle for synthesis
     */
    constructor(options = {}) {
        if (!options.name) {
            throw new Error("Library requires a 'name'");
        }
        this.name = options.name;
        this.version = options.version || '1.0.0';
        this.description = options.description || '';
        this.verilogBundle = options.verilogBundle || '';
        /** @type {Map<string, Module>} */
        this.modules = new Map();
    }

    /**
     * Register a module in this library.
     * @param {Module|Object} moduleDef
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
}

/**
 * Global Library Registry.
 * Allows managing multiple custom libraries without polluting the core engine.
 */
class LibraryRegistry {
    constructor() {
        /** @type {Map<string, Library>} */
        this.libraries = new Map();
        this.activeLibraryName = null;
    }

    /**
     * Register a new library.
     * @param {Library} library
     */
    register(library) {
        if (!(library instanceof Library)) {
            library = new Library(library);
        }
        this.libraries.set(library.name, library);
        if (!this.activeLibraryName) {
            this.activeLibraryName = library.name;
        }
        return library;
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
}

export const registry = new LibraryRegistry();
