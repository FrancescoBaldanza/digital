#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Silence console.warn / console.log from sub-libraries so stdout stays pure JSON
console.warn = () => {};
console.log = () => {};

const { yosys2digitaljs, io_ui } = require('yosys2digitaljs/core');

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
const tmpYosys = path.join('/tmp', 'yosys_synth_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8) + '.json');

let tmpBundle = null;
try {
    const vContent = fs.existsSync(vFile) ? fs.readFileSync(vFile, 'utf8') : '';
    const hasUniboInclude = vContent.includes('unibo.v') || vContent.includes('modules.v');

    // Resolve UniBo Verilog definitions
    let uniboLib = path.resolve(__dirname, '../src/libraries/unibo/modules.v');
    const embeddedVerilog = (typeof __UNIBO_VERILOG_SOURCE__ !== 'undefined') ? __UNIBO_VERILOG_SOURCE__ : '';

    if (!fs.existsSync(uniboLib)) {
        tmpBundle = path.join('/tmp', 'digital_unibo_modules.v');
        if (embeddedVerilog) {
            fs.writeFileSync(tmpBundle, embeddedVerilog, 'utf8');
            uniboLib = tmpBundle;
        }
    }

    // Prepare unibo.v in the directory of vFile and common include paths
    const uniboContent = fs.existsSync(uniboLib) ? fs.readFileSync(uniboLib, 'utf8') : embeddedVerilog;
    const targetDirs = new Set([
        path.dirname(vFile),
        os.tmpdir(),
        '/tmp',
        '/private/tmp'
    ]);
    if (originalFilePath && fs.existsSync(originalFilePath)) {
        targetDirs.add(path.dirname(originalFilePath));
    }
    for (const d of targetDirs) {
        try {
            if (fs.existsSync(d)) {
                fs.writeFileSync(path.join(d, 'unibo.v'), uniboContent, 'utf8');
            }
        } catch (_) {}
    }

    // Build include directory flags for Yosys
    const includeDirs = Array.from(targetDirs);
    const incArgs = includeDirs.map(d => `-I"${d}"`).join(' ');

    let readSources = '';
    // If the file doesn't already have `include "unibo.v"`, read uniboLib first
    if (!hasUniboInclude && fs.existsSync(uniboLib)) {
        readSources += `read_verilog "${uniboLib}"; `;
    }
    readSources += `read_verilog "${vFile}";`;

    const yosysScript = `verilog_defaults -add -overwrite ${incArgs}; ${readSources} hierarchy -auto-top; proc; opt_clean; memory -nomap; wreduce -memx; opt_clean; write_json "${tmpYosys}"`;
    const yosysCmd = `"${yosysBin}" -p '${yosysScript}'`;
    execSync(yosysCmd, { stdio: 'pipe' });

    if (!fs.existsSync(tmpYosys)) {
        throw new Error('Yosys execution completed but no netlist output was generated.');
    }

    const yosysJson = JSON.parse(fs.readFileSync(tmpYosys, 'utf8'));
    const djs = yosys2digitaljs(yosysJson);
    io_ui(djs);

    process.stdout.write(JSON.stringify({ status: 'ok', circuit: djs }));
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
    } catch (_) {}
}
