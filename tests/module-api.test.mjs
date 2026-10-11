"use strict";

import {
    Side,
    isValidSide,
    normalizeSide,
    PinStyle,
    Port,
    Input,
    Output,
    Shape,
    ModuleShape,
    Module,
    ValidationError
} from '../lib/module-api/index.js';

describe('OOP Module API: Port, Input, Output & Bus Specifications', () => {
    test('Port requires a valid non-empty name', () => {
        expect(() => new Port({ name: '' })).toThrow(/non-empty 'name'/);
        expect(() => new Port({ name: '   ' })).toThrow(/non-empty 'name'/);
        expect(() => new Port({})).toThrow(/non-empty 'name'/);

        const p = new Port({ name: ' clk ' });
        expect(p.name).toBe('clk');
    });

    test('Port bit width validation and bus detection', () => {
        const singleBit = new Port({ name: 'a' });
        expect(singleBit.bits).toBe(1);
        expect(singleBit.isBus).toBe(false);
        expect(singleBit.pinStyle).toBe(PinStyle.STANDARD);

        const busPort = new Port({ name: 'data', bits: 32 });
        expect(busPort.bits).toBe(32);
        expect(busPort.isBus).toBe(true);
        expect(busPort.pinStyle).toBe(PinStyle.BUS);

        // Invalid bit widths
        expect(() => new Port({ name: 'bad', bits: 0 })).toThrow(/bits/);
        expect(() => new Port({ name: 'bad', bits: -4 })).toThrow(/bits/);
        expect(() => new Port({ name: 'bad', bits: 3.5 })).toThrow(/bits/);
        expect(() => new Port({ name: 'bad', bits: 'two' })).toThrow(/bits/);
    });

    test('Side validation and normalization', () => {
        expect(isValidSide('Left')).toBe(true);
        expect(isValidSide('RIGHT')).toBe(true);
        expect(isValidSide('top')).toBe(true);
        expect(isValidSide('Bottom')).toBe(true);
        expect(isValidSide('Middle')).toBe(false);
        expect(isValidSide(123)).toBe(false);

        expect(normalizeSide('left')).toBe(Side.Left);
        expect(normalizeSide('RIGHT')).toBe(Side.Right);
        expect(normalizeSide('TOP')).toBe(Side.Top);
        expect(normalizeSide('bottom')).toBe(Side.Bottom);
        expect(() => normalizeSide('invalid_side')).toThrow(/Invalid side/);
    });

    test('Input and Output defaults and orientations', () => {
        const inp = new Input({ name: 'in_sig' });
        expect(inp.direction).toBe('in');
        expect(inp.side).toBe(Side.Left);
        expect(inp.initialValue).toBe(0);

        const out = new Output({ name: 'out_sig' });
        expect(out.direction).toBe('out');
        expect(out.side).toBe(Side.Right);
        expect(out.initialValue).toBe(0);

        const customIn = new Input({ name: 'clr', side: Side.Top, pinStyle: PinStyle.INVERTED });
        expect(customIn.side).toBe(Side.Top);
        expect(customIn.pinStyle).toBe(PinStyle.INVERTED);
    });

    test('Port allowedSources constraint checking', () => {
        class SourceA extends Module {}
        class SourceB extends Module {}

        const port = new Input({
            name: 'target',
            allowedSources: ['SourceA', SourceB]
        });

        expect(port.isConnectionAllowed(new SourceA({ name: 'A' }))).toBe(true);
        expect(port.isConnectionAllowed('SourceA')).toBe(true);
        expect(port.isConnectionAllowed(new SourceB({ name: 'B' }))).toBe(true);
        expect(port.isConnectionAllowed('SourceC')).toBe(false);

        const unconstrained = new Input({ name: 'open' });
        expect(unconstrained.isConnectionAllowed('Anything')).toBe(true);
    });
});

describe('OOP Module API: Shape & ModuleShape Hierarchy', () => {
    test('Shape and ModuleShape backward-compatibility alias', () => {
        expect(Shape).toBeDefined();
        expect(ModuleShape).toBe(Shape);
    });

    test('Shape layout, pin distribution and dimensions calculation', () => {
        const shape = new Shape();
        const in1 = new Input({ name: 'a' });
        const in2 = new Input({ name: 'b' });
        const clk = new Input({ name: 'clk', side: Side.Top });
        const rst = new Input({ name: 'rst', side: Side.Bottom });
        const out = new Output({ name: 'y' });

        shape.addPort(in1, Side.Left);
        shape.addPort(in2, Side.Left);
        shape.addPort(clk, Side.Top);
        shape.addPort(rst, Side.Bottom);
        shape.addPort(out, Side.Right);

        expect(shape.countOnSide(Side.Left)).toBe(2);
        expect(shape.countOnSide(Side.Right)).toBe(1);
        expect(shape.countOnSide(Side.Top)).toBe(1);
        expect(shape.countOnSide(Side.Bottom)).toBe(1);

        const dims = shape.calculateDimensions('MyModule');
        expect(dims.width).toBeGreaterThanOrEqual(60);
        expect(dims.height).toBeGreaterThanOrEqual(40);

        const positions = shape.getPortPositions(dims, 'MyModule');
        expect(positions.a).toBeDefined();
        expect(positions.a.side).toBe(Side.Left);
        expect(positions.a.x).toBe(0);

        expect(positions.y).toBeDefined();
        expect(positions.y.side).toBe(Side.Right);
        expect(positions.y.x).toBe(dims.width);

        expect(positions.clk).toBeDefined();
        expect(positions.clk.side).toBe(Side.Top);
        expect(positions.clk.y).toBe(0);

        expect(positions.rst).toBeDefined();
        expect(positions.rst.side).toBe(Side.Bottom);
        expect(positions.rst.y).toBe(dims.height);
    });
});

describe('OOP Module API: Module Definition & Formal Validation', () => {
    test('Construct valid module and access ports', () => {
        const mod = new Module({
            name: 'ALU32',
            inputs: [
                new Input({ name: 'a', bits: 32 }),
                new Input({ name: 'b', bits: 32 }),
                new Input({ name: 'op', bits: 4 })
            ],
            outputs: [
                new Output({ name: 'out', bits: 32 }),
                new Output({ name: 'zero' })
            ]
        });

        expect(mod.name).toBe('ALU32');
        expect(mod.inputs).toHaveLength(3);
        expect(mod.outputs).toHaveLength(2);
        expect(mod.getPort('op')).toBeDefined();
        expect(mod.getPort('zero')).toBeDefined();
        expect(mod.getPort('unknown')).toBeUndefined();

        const validation = mod.validate();
        expect(validation.valid).toBe(true);
        expect(validation.errors).toHaveLength(0);
        expect(mod.validateOrThrow()).toBe(true);
    });

    test('Dynamic port addition via addInput and addOutput', () => {
        const mod = new Module({ name: 'DynamicGate' });
        mod.addInput(new Input({ name: 'in1' }));
        mod.addOutput({ name: 'out1' });

        expect(mod.inputs).toHaveLength(1);
        expect(mod.outputs).toHaveLength(1);
        expect(mod.shape.countOnSide(Side.Left)).toBe(1);
        expect(mod.shape.countOnSide(Side.Right)).toBe(1);
        expect(mod.validate().valid).toBe(true);
    });

    test('Validation catches invalid module identifier names', () => {
        const invalidNames = ['123BadStart', 'Has Space', 'has-hyphen', 'special$char', ''];
        for (const badName of invalidNames) {
            if (badName === '') {
                expect(() => new Module({ name: badName })).toThrow();
            } else {
                const mod = new Module({
                    name: badName,
                    inputs: [new Input({ name: 'in' })],
                    outputs: [new Output({ name: 'out' })]
                });
                const res = mod.validate();
                expect(res.valid).toBe(false);
                expect(res.errors.some(e => e.includes('invalid'))).toBe(true);
                expect(() => mod.validateOrThrow()).toThrow(ValidationError);
            }
        }
    });

    test('Validation catches duplicate port names across inputs and outputs', () => {
        const dupInputs = new Module({
            name: 'DupIn',
            inputs: [
                new Input({ name: 'data' }),
                new Input({ name: 'data' })
            ],
            outputs: [new Output({ name: 'out' })]
        });
        const resIn = dupInputs.validate();
        expect(resIn.valid).toBe(false);
        expect(resIn.errors.some(e => e.includes("duplicate port name 'data'"))).toBe(true);
        expect(() => dupInputs.validateOrThrow()).toThrow(ValidationError);

        const dupInOut = new Module({
            name: 'DupInOut',
            inputs: [new Input({ name: 'sig' })],
            outputs: [new Output({ name: 'sig' })]
        });
        const resInOut = dupInOut.validate();
        expect(resInOut.valid).toBe(false);
        expect(resInOut.errors.some(e => e.includes("duplicate port name 'sig'"))).toBe(true);
    });

    test('Validation catches empty modules with no ports', () => {
        const emptyMod = new Module({ name: 'EmptyMod', inputs: [], outputs: [] });
        const res = emptyMod.validate();
        expect(res.valid).toBe(false);
        expect(res.errors.some(e => e.includes('must have at least one input or output port'))).toBe(true);
    });

    test('toVerilogHeader generates clean Verilog module header', () => {
        const mod = new Module({
            name: 'Mux2',
            inputs: [
                new Input({ name: 'd0', bits: 8 }),
                new Input({ name: 'd1', bits: 8 }),
                new Input({ name: 'sel' })
            ],
            outputs: [
                new Output({ name: 'y', bits: 8 })
            ]
        });

        const header = mod.toVerilogHeader();
        expect(header).toContain('module Mux2 (');
        expect(header).toContain('input wire [7:0] d0');
        expect(header).toContain('input wire [7:0] d1');
        expect(header).toContain('input wire sel');
        expect(header).toContain('output wire [7:0] y');
    });

    test('validateConnection verifies pin-level and source constraints', () => {
        const mod = new Module({
            name: 'Receiver',
            inputs: [
                new Input({ name: 'rx_data', allowedSources: ['Sender'] })
            ],
            outputs: [new Output({ name: 'ack' })]
        });

        expect(mod.validateConnection('rx_data', 'Sender').valid).toBe(true);
        expect(mod.validateConnection('rx_data', 'NoiseSource').valid).toBe(false);
        expect(mod.validateConnection('nonexistent', 'Sender').valid).toBe(false);
    });
});
