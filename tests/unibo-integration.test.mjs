"use strict";

import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';

import { uniboLibrary } from '../lib/libraries/unibo/index.js';
import { registry } from '../lib/libraries/registry.js';

describe('Task Group 3: UniBo Library & Multi-file Verilog Support', () => {
    let tmpDir;
    const synthScript = path.resolve(__dirname, '../scripts/synthesize-entry.js');

    beforeEach(() => {
        tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'digital_unibo_test_'));
    });

    afterEach(() => {
        try {
            if (fs.existsSync(tmpDir)) {
                fs.rmSync(tmpDir, { recursive: true, force: true });
            }
        } catch (_) {}
    });

    test('3.1 All registered UniBo modules pass formal validation', () => {
        const modules = uniboLibrary.getAllModules();
        expect(modules.length).toBeGreaterThanOrEqual(20);

        for (const mod of modules) {
            const validation = mod.validate();
            expect(validation.valid).toBe(true);
            expect(validation.errors).toHaveLength(0);
            expect(mod.inputs.length + mod.outputs.length).toBeGreaterThanOrEqual(1);
        }
    });

    test('3.1 Verifies complex combinational & sequential modules (ALU, Decoder, Mux2, Adder, FFD, Counter)', () => {
        const alu = uniboLibrary.getModule('ALU');
        expect(alu).toBeDefined();
        expect(alu.getPort('a').bits).toBe(8);
        expect(alu.getPort('b').bits).toBe(8);
        expect(alu.getPort('op').bits).toBe(3);
        expect(alu.getPort('y').bits).toBe(8);
        expect(alu.getPort('flag').bits).toBe(4);

        const dec = uniboLibrary.getModule('Decoder');
        expect(dec).toBeDefined();
        expect(dec.getPort('a').bits).toBe(3);
        expect(dec.getPort('u').bits).toBe(8);

        const mux2 = uniboLibrary.getModule('Mux2');
        expect(mux2).toBeDefined();
        expect(mux2.getPort('d0')).toBeDefined();
        expect(mux2.getPort('d1')).toBeDefined();
        expect(mux2.getPort('sel')).toBeDefined();
        expect(mux2.getPort('y')).toBeDefined();

        const ffd = uniboLibrary.getModule('FFD');
        expect(ffd).toBeDefined();
        expect(ffd.getPort('clk').side).toBe('Left');
        expect(ffd.getPort('d').side).toBe('Left');
        expect(ffd.getPort('rst').side).toBe('Bottom');
        expect(ffd.getPort('q').side).toBe('Right');
        expect(ffd.getPort('qn').side).toBe('Right');
    });

    test('3.2 Synthesis of modules.v standalone directly through Yosys', () => {
        const synthEntry = path.resolve(__dirname, '../scripts/synthesize-entry.js');
        const modulesV = path.resolve(__dirname, '../src/libraries/unibo/modules.v');

        const testWrapper = path.join(tmpDir, 'test_wrapper.v');
        fs.writeFileSync(testWrapper, `
\`include "unibo.v"

module wrapper (
    input  wire clk,
    input  wire [7:0] a,
    input  wire [7:0] b,
    input  wire [2:0] op,
    input  wire rst,
    output wire [7:0] alu_y,
    output wire [3:0] alu_flag,
    output wire [7:0] dec_out,
    output wire [6:0] count_out,
    output wire q_out
);
    ALU alu_inst (.a(a), .b(b), .op(op), .y(alu_y), .flag(alu_flag));
    Decoder dec_inst (.a(op), .u(dec_out));
    CounterEn counter_inst (.clk(clk), .en(1'b1), .q(count_out));
    FFD ffd_inst (.clk(clk), .d(a[0]), .rst(rst), .q(q_out), .qn());
endmodule
`, 'utf8');

        const outRaw = execSync(`node "${synthEntry}" "${testWrapper}"`, { encoding: 'utf8' });
        const res = JSON.parse(outRaw);

        expect(res.status).toBe('ok');
        expect(res.circuit).toBeDefined();
        expect(res.circuit.subcircuits.ALU).toBeDefined();
        expect(res.circuit.subcircuits.Decoder).toBeDefined();
        expect(res.circuit.subcircuits.CounterEn).toBeDefined();
        expect(res.circuit.subcircuits.FFD).toBeDefined();
    });

    test('3.3 Multi-file hierarchy with nested `include statements', () => {
        const fileA = path.join(tmpDir, 'sub_alu_pack.v');
        const fileB = path.join(tmpDir, 'top_system.v');

        fs.writeFileSync(fileA, `
\`include "unibo.v"

module SubProcessingUnit (
    input  wire [7:0] data_in,
    input  wire [2:0] code,
    output wire [7:0] processed
);
    wire [7:0] alu_res;
    ALU internal_alu (.a(data_in), .b(8'd1), .op(code), .y(alu_res), .flag());
    Mux2 internal_mux (.d0(data_in[0]), .d1(alu_res[0]), .sel(code[0]), .y(processed[0]));
    assign processed[7:1] = alu_res[7:1];
endmodule
`, 'utf8');

        fs.writeFileSync(fileB, `
\`include "sub_alu_pack.v"

module TopSystem (
    input  wire [7:0] rx_byte,
    input  wire [2:0] mode,
    output wire [7:0] tx_byte
);
    SubProcessingUnit unit1 (
        .data_in(rx_byte),
        .code(mode),
        .processed(tx_byte)
    );
endmodule
`, 'utf8');

        const outRaw = execSync(`node "${synthScript}" "${fileB}"`, { encoding: 'utf8' });
        const res = JSON.parse(outRaw);

        expect(res.status).toBe('ok');
        expect(res.circuit).toBeDefined();
        expect(res.circuit.subcircuits.SubProcessingUnit).toBeDefined();
        expect(res.circuit.subcircuits.ALU).toBeDefined();
        expect(res.circuit.subcircuits.Mux2).toBeDefined();
    });
});
