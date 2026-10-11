#!/usr/bin/env node
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Silence console.warn / console.log from sub-libraries so stdout stays pure JSON
console.warn = () => {};
console.log = () => {};

const { yosys2digitaljs, io_ui } = require('yosys2digitaljs/core');
const { transformCircuit } = require('../lib/transform.js');

function findBinary(name, extraPaths = []) {
    const envPath = process.env.PATH || '';
    const searchPaths = [...extraPaths, ...envPath.split(path.delimiter)];
    for (const p of searchPaths) {
        if (!p) continue;
        const candidate = path.join(p, name);
        if (fs.existsSync(candidate)) {
            try {
                fs.accessSync(candidate, fs.constants.X_OK);
                return candidate;
            } catch (_) {}
        }
    }
    return null;
}

const vFile = process.argv[2];
const originalFilePath = process.argv[3] || '';
if (!vFile) {
    process.stdout.write(JSON.stringify({ status: 'error', message: 'No input Verilog file provided.' }));
    process.exit(1);
}

const yosysBin = process.env.YOSYS_PATH || findBinary('yosys', ['/opt/homebrew/bin', '/usr/local/bin']) || 'yosys';
const tmpYosys = path.join(os.tmpdir(), 'yosys_synth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8) + '.json');

let tmpBundle = null;
let tmpSymlinks = [];
try {
    const vContent = fs.existsSync(vFile) ? fs.readFileSync(vFile, 'utf8') : '';
    const hasUniboInclude = vContent.includes('unibo.v') || vContent.includes('modules.v');

    // Resolve UniBo Verilog definitions
    let uniboLib = path.resolve(__dirname, '../src/libraries/unibo/modules.v');
    const embeddedVerilog = (typeof __UNIBO_VERILOG_SOURCE__ !== 'undefined') ? __UNIBO_VERILOG_SOURCE__ : '';

    if (!fs.existsSync(uniboLib)) {
        tmpBundle = path.join(os.tmpdir(), 'digital_unibo_modules_' + Date.now() + '.v');
        if (embeddedVerilog) {
            fs.writeFileSync(tmpBundle, embeddedVerilog, 'utf8');
            uniboLib = tmpBundle;
        }
    }

    // Try importing the LibraryResolver from lib/libraries/resolver.js if compiled, or fallback gracefully
    let resolvedLibDirs = [];
    try {
        const { defaultResolver } = require('../lib/libraries/resolver.js');
        if (defaultResolver && typeof defaultResolver.resolveIncludeDirectories === 'function') {
            resolvedLibDirs = defaultResolver.resolveIncludeDirectories([
                path.dirname(vFile),
                path.resolve(__dirname, '../libraries'),
                path.resolve(__dirname, '../src/libraries'),
                path.resolve(__dirname, '../src/libraries/unibo')
            ]);
        }
    } catch (_) {
        resolvedLibDirs = [
            path.resolve(__dirname, '../src/libraries/unibo'),
            path.resolve(__dirname, '../src/libraries'),
            path.resolve(__dirname, '../libraries')
        ];
    }

    const targetDirs = new Set([
        path.dirname(vFile),
        path.resolve(__dirname, '../src/libraries/unibo'),
        ...resolvedLibDirs
    ]);
    if (originalFilePath && fs.existsSync(originalFilePath)) {
        targetDirs.add(path.dirname(originalFilePath));
    }

    // Build safe include directory flags for Yosys (handling spaces and non-verilog folders)
    let tmpSymlinks = [];
    const includeDirs = [];
    for (const d of targetDirs) {
        if (!fs.existsSync(d)) continue;
        try {
            const stat = fs.statSync(d);
            if (!stat.isDirectory()) continue;
            const entries = fs.readdirSync(d);
            const hasVerilog = entries.some(f => f.endsWith('.v') || f.endsWith('.sv') || f.endsWith('.vh'));
            if (!hasVerilog) continue;
            if (!d.includes(' ')) {
                includeDirs.push(d);
            } else {
                const linkName = path.join(os.tmpdir(), 'djs_inc_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8));
                try {
                    fs.symlinkSync(d, linkName, 'dir');
                    tmpSymlinks.push(linkName);
                    includeDirs.push(linkName);
                } catch (_) {}
            }
        } catch (_) {}
    }
    const incArgs = includeDirs.map(d => `-I${d}`).join(' ');

    let readSources = '';
    // If the file doesn't already have `include "unibo.v"`, read uniboLib first
    if (!hasUniboInclude && fs.existsSync(uniboLib)) {
        readSources += `read_verilog "${uniboLib}"; `;
    }
    readSources += `read_verilog "${vFile}";`;

    const yosysScript = `verilog_defaults -add -overwrite ${incArgs}; ${readSources} hierarchy -auto-top; proc; opt_clean; memory -nomap; wreduce -memx; opt_clean; write_json "${tmpYosys}"`;
    execFileSync(yosysBin, ['-p', yosysScript], { stdio: 'pipe' });

    if (!fs.existsSync(tmpYosys)) {
        throw new Error('Yosys execution completed but no netlist output was generated.');
    }

    const yosysJson = JSON.parse(fs.readFileSync(tmpYosys, 'utf8'));
    const djs = yosys2digitaljs(yosysJson);
    io_ui(djs);

    const transformed = transformCircuit(djs);
    process.stdout.write(JSON.stringify({ status: 'ok', circuit: transformed }));
} catch (err) {
    const stderr = err.stderr ? err.stderr.toString('utf8') : '';
    const msg = stderr.trim() || err.message || 'Unknown error during synthesis';
    process.stdout.write(JSON.stringify({ status: 'error', message: msg }));
} finally {
    try {
        if (fs.existsSync(tmpYosys)) {
            fs.unlinkSync(tmpYosys);
        }
        if (tmpBundle && fs.existsSync(tmpBundle)) {
            fs.unlinkSync(tmpBundle);
        }
        for (const link of tmpSymlinks) {
            if (fs.existsSync(link)) {
                fs.unlinkSync(link);
            }
        }
    } catch (_) {}
}
