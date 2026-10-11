"use strict";

import fs from 'fs';
import path from 'path';
import os from 'os';

import {
    Library,
    LibraryRegistry,
    LibraryResolver,
    defaultResolver
} from '../lib/libraries/index.js';
import { Module, Input, Output } from '../lib/module-api/index.js';

describe('Task Group 2: Library Registry & Directory Resolver', () => {
    let tmpDir;

    beforeEach(() => {
        tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'digital_test_lib_'));
    });

    afterEach(() => {
        try {
            if (fs.existsSync(tmpDir)) {
                fs.rmSync(tmpDir, { recursive: true, force: true });
            }
        } catch (_) {}
    });

    test('2.1 Library container operations (register, retrieve, getModuleNames)', () => {
        const lib = new Library({
            name: 'CustomGates',
            version: '2.1.0',
            description: 'Gates custom didattici'
        });

        const modXor3 = new Module({
            name: 'Xor3',
            inputs: [new Input({ name: 'a' }), new Input({ name: 'b' }), new Input({ name: 'c' })],
            outputs: [new Output({ name: 'y' })]
        });

        lib.registerModule(modXor3);
        expect(lib.name).toBe('CustomGates');
        expect(lib.version).toBe('2.1.0');
        expect(lib.getModule('Xor3')).toBe(modXor3);
        expect(lib.getModuleNames()).toContain('Xor3');
        expect(lib.getAllModules()).toHaveLength(1);
    });

    test('2.1 LibraryRegistry operations (register, get, unregister, active switch)', () => {
        const reg = new LibraryRegistry();
        const libA = new Library({ name: 'LibA' });
        const libB = new Library({ name: 'LibB' });

        libA.registerModule(new Module({ name: 'ModA' }));
        libB.registerModule(new Module({ name: 'ModB' }));

        reg.register(libA);
        reg.register(libB);

        expect(reg.has('LibA')).toBe(true);
        expect(reg.has('LibB')).toBe(true);
        expect(reg.getActive().name).toBe('LibA');

        reg.setActive('LibB');
        expect(reg.getActive().name).toBe('LibB');

        // findModule looks up across registered libraries
        expect(reg.findModule('ModA')).toBeDefined();
        expect(reg.findModule('ModB')).toBeDefined();
        expect(reg.findModule('NonExistent')).toBeUndefined();

        // unregister
        expect(reg.unregister('LibB')).toBe(true);
        expect(reg.has('LibB')).toBe(false);
        expect(reg.getActive().name).toBe('LibA');
    });

    test('2.2 LibraryResolver discovery of custom directory libraries', () => {
        // Create custom library in temporary directory
        const customLibDir = path.join(tmpDir, 'MyTeacherLib');
        fs.mkdirSync(customLibDir, { recursive: true });

        const manifest = {
            name: 'MyTeacherLib',
            version: '1.2.3',
            description: 'Custom teacher pack',
            modules: ['Mux4', 'PriorityEnc']
        };
        fs.writeFileSync(path.join(customLibDir, 'library.json'), JSON.stringify(manifest), 'utf8');
        fs.writeFileSync(path.join(customLibDir, 'modules.v'), 'module Mux4; endmodule\n', 'utf8');

        const resolver = new LibraryResolver({
            cwd: tmpDir,
            searchPaths: [tmpDir]
        });

        const discovered = resolver.discoverLibraries();
        expect(discovered.length).toBeGreaterThanOrEqual(1);

        const found = discovered.find(d => d.name === 'MyTeacherLib');
        expect(found).toBeDefined();
        expect(found.dir).toBe(customLibDir);
        expect(found.verilogFile).toBe(path.join(customLibDir, 'modules.v'));
        expect(found.manifest.version).toBe('1.2.3');
    });

    test('2.2 LibraryRegistry loads custom library directly from filesystem', () => {
        const myLibDir = path.join(tmpDir, 'ExtLib');
        fs.mkdirSync(myLibDir, { recursive: true });
        fs.writeFileSync(
            path.join(myLibDir, 'library.json'),
            JSON.stringify({ name: 'ExtLib', version: '3.0.0', modules: ['SampleA', 'SampleB'] }),
            'utf8'
        );
        fs.writeFileSync(path.join(myLibDir, 'modules.v'), '// Verilog content\nmodule SampleA; endmodule\n', 'utf8');

        const reg = new LibraryRegistry();
        const loaded = reg.loadFromDirectory(myLibDir);

        expect(loaded).toBeDefined();
        expect(loaded.name).toBe('ExtLib');
        expect(loaded.version).toBe('3.0.0');
        expect(loaded.verilogBundle).toContain('module SampleA');
        expect(loaded.getModuleNames()).toEqual(['SampleA', 'SampleB']);
        expect(reg.findModule('SampleA')).toBeDefined();
    });

    test('2.3 LibraryResolver generates valid Yosys include arguments (-I)', () => {
        const customDir1 = path.join(tmpDir, 'include_dir1');
        const customDir2 = path.join(tmpDir, 'include_dir2');
        fs.mkdirSync(customDir1, { recursive: true });
        fs.mkdirSync(customDir2, { recursive: true });

        const resolver = new LibraryResolver({
            cwd: tmpDir,
            searchPaths: [customDir1]
        });

        const incDirs = resolver.resolveIncludeDirectories([customDir2]);
        expect(incDirs).toContain(customDir1);
        expect(incDirs).toContain(customDir2);

        const yosysArgs = resolver.getYosysIncludeArgs([customDir2]);
        expect(yosysArgs).toContain(`-I"${customDir1}"`);
        expect(yosysArgs).toContain(`-I"${customDir2}"`);
    });

    test('2.4 Verilog synthesis pipeline correctly compiles tests/test.v with include resolver', () => {
        // Validate synthesize-entry integration on tests/test.v
        const { execSync } = require('child_process');
        const scriptPath = path.resolve(__dirname, '../scripts/synthesize-entry.js');
        const targetVerilog = path.resolve(__dirname, 'test.v');

        expect(fs.existsSync(scriptPath)).toBe(true);
        expect(fs.existsSync(targetVerilog)).toBe(true);

        const outputRaw = execSync(`node "${scriptPath}" "${targetVerilog}"`, { encoding: 'utf8' });
        const res = JSON.parse(outputRaw);

        expect(res.status).toBe('ok');
        expect(res.circuit).toBeDefined();
        expect(res.circuit.devices).toBeDefined();
        expect(res.circuit.subcircuits).toBeDefined();

        // Check UniBo subcircuits instantiated
        expect(res.circuit.subcircuits.FullAdder).toBeDefined();
        expect(res.circuit.subcircuits.HalfAdder).toBeDefined();
    });
});
