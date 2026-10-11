"use strict";

import fs from 'fs';
import path from './path-utils.mjs';

/**
 * Normalizes and checks if a path is a valid directory.
 * @param {string} dirPath
 * @returns {boolean}
 */
export function isDirectory(dirPath) {
    try {
        if (!fs || typeof fs.statSync !== 'function') return false;
        return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
    } catch (_) {
        return false;
    }
}

/**
 * Resolves library root folders and include directories for Verilog synthesis and modular components.
 */
export class LibraryResolver {
    /**
     * @param {Object} [options={}]
     * @param {string[]} [options.searchPaths=[]] - Configurable directories (e.g. ['./libraries', './src/libraries'])
     * @param {string} [options.cwd=process.cwd()] - Current working root
     */
    constructor(options = {}) {
        this.cwd = options.cwd || (typeof process !== 'undefined' && typeof process.cwd === 'function' ? process.cwd() : '.');
        this.searchPaths = new Set();

        const currentDir = typeof __dirname !== 'undefined' ? __dirname : '.';
        const initialPaths = options.searchPaths || [
            './libraries',
            './src/libraries',
            path && typeof path.resolve === 'function' ? path.resolve(currentDir, '..') : '..',
            path && typeof path.resolve === 'function' ? path.resolve(currentDir, '../../libraries') : '../../libraries'
        ];

        for (const p of initialPaths) {
            this.addSearchPath(p);
        }
    }

    /**
     * Add a directory to the resolver search path list.
     * @param {string} dirPath
     * @returns {boolean} True if added and exists
     */
    addSearchPath(dirPath) {
        if (!dirPath || typeof dirPath !== 'string') return false;
        const resolved = path.isAbsolute(dirPath) ? path.normalize(dirPath) : path.resolve(this.cwd, dirPath);
        this.searchPaths.add(resolved);
        return isDirectory(resolved);
    }

    /**
     * Returns all currently registered search paths.
     * @returns {string[]}
     */
    getSearchPaths() {
        return Array.from(this.searchPaths);
    }

    /**
     * Scans search paths and discovers library manifest directories (`library.json` or `modules.v`).
     * @returns {Array<{name: string, dir: string, verilogFile?: string, manifestFile?: string, manifest?: Object}>}
     */
    discoverLibraries() {
        const discovered = new Map();

        for (const searchPath of this.searchPaths) {
            if (!isDirectory(searchPath)) continue;

            // 1. Check if the searchPath itself is a library folder
            const selfLib = this._inspectDirectory(searchPath);
            if (selfLib && !discovered.has(selfLib.name)) {
                discovered.set(selfLib.name, selfLib);
            }

            // 2. Scan immediate subdirectories
            try {
                const entries = fs.readdirSync(searchPath, { withFileTypes: true });
                for (const entry of entries) {
                    if (entry.isDirectory()) {
                        const subDir = path.join(searchPath, entry.name);
                        const libInfo = this._inspectDirectory(subDir, entry.name);
                        if (libInfo && !discovered.has(libInfo.name)) {
                            discovered.set(libInfo.name, libInfo);
                        }
                    }
                }
            } catch (_) {}
        }

        return Array.from(discovered.values());
    }

    /**
     * Inspects a directory to check if it contains a valid library definition.
     * @private
     */
    _inspectDirectory(dirPath, fallbackName = null) {
        if (!isDirectory(dirPath)) return null;

        const manifestPath = path.join(dirPath, 'library.json');
        const modulesVPath = path.join(dirPath, 'modules.v');
        const uniboVPath = path.join(dirPath, 'unibo.v');

        let manifest = null;
        let name = fallbackName || path.basename(dirPath);

        if (fs.existsSync(manifestPath)) {
            try {
                const parsed = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
                if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                    manifest = parsed;
                    if (manifest.name) {
                        name = manifest.name;
                    }
                }
            } catch (_) {}
        }

        let verilogFile = null;
        if (manifest && manifest.verilogEntry && typeof manifest.verilogEntry === 'string') {
            const candidate = path.resolve(dirPath, manifest.verilogEntry);
            const rel = path.relative(dirPath, candidate);
            if (!rel.startsWith('..') && !path.isAbsolute(manifest.verilogEntry) && fs.existsSync(candidate)) {
                verilogFile = candidate;
            }
        } else if (fs.existsSync(modulesVPath)) {
            verilogFile = modulesVPath;
        } else if (fs.existsSync(uniboVPath)) {
            verilogFile = uniboVPath;
        }

        // Must have at least a manifest or a verilog entry file to be considered a library
        if (!manifest && !verilogFile) {
            return null;
        }

        return {
            name,
            dir: dirPath,
            verilogFile: verilogFile || undefined,
            manifestFile: manifest ? manifestPath : undefined,
            manifest: manifest || undefined
        };
    }

    /**
     * Find a library by name or directory.
     * @param {string} nameOrDir
     * @returns {{name: string, dir: string, verilogFile?: string, manifestFile?: string, manifest?: Object}|null}
     */
    findLibrary(nameOrDir) {
        const libs = this.discoverLibraries();
        const found = libs.find(l =>
            l.name.toLowerCase() === nameOrDir.toLowerCase() ||
            path.normalize(l.dir) === path.normalize(nameOrDir)
        );
        return found || null;
    }

    /**
     * Collects all include directories for Verilog synthesis compiler flags (`-I<dir>`).
     * Includes all discovered library directories, active search paths, and optional extra targets.
     * @param {string[]} [extraPaths=[]]
     * @returns {string[]} Unique list of existing directory paths
     */
    resolveIncludeDirectories(extraPaths = []) {
        const includeSet = new Set();

        // 1. Discovered library directories
        for (const lib of this.discoverLibraries()) {
            if (isDirectory(lib.dir)) {
                includeSet.add(path.normalize(lib.dir));
            }
        }

        // 2. Configured search paths that exist
        for (const sp of this.searchPaths) {
            if (isDirectory(sp)) {
                includeSet.add(path.normalize(sp));
            }
        }

        // 3. Extra caller paths (e.g. target file directory, system tmp)
        for (const ep of extraPaths) {
            if (!ep) continue;
            const resolved = path.isAbsolute(ep) ? ep : path.resolve(this.cwd, ep);
            if (isDirectory(resolved)) {
                includeSet.add(path.normalize(resolved));
            }
        }

        return Array.from(includeSet);
    }

    /**
     * Generates the command-line include arguments for Yosys compiler (e.g. `-I"path1" -I"path2"`).
     * @param {string[]} [extraPaths=[]]
     * @returns {string}
     */
    getYosysIncludeArgs(extraPaths = []) {
        const dirs = this.resolveIncludeDirectories(extraPaths);
        return dirs.map(d => `-I"${d}"`).join(' ');
    }
}

export const defaultResolver = new LibraryResolver();
