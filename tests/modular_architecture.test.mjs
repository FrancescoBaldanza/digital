"use strict";

import { Port, Input, Output, Side, Module } from '../lib/module-api/index.js';
import { registry, Library } from '../lib/libraries/registry.js';
import '../lib/libraries/unibo/index.js';
import * as cells from '../lib/cells.js';

describe('Modular Architecture: Declarative Module & Port API', () => {
    test('Port creation and default side', () => {
        const p1 = new Input({ name: 'clk', pinStyle: 'clock' });
        expect(p1.name).toBe('clk');
        expect(p1.side).toBe(Side.Left);
        expect(p1.direction).toBe('in');
        expect(p1.pinStyle).toBe('clock');

        const p2 = new Output({ name: 'q' });
        expect(p2.name).toBe('q');
        expect(p2.side).toBe(Side.Right);
        expect(p2.direction).toBe('out');
    });

    test('Side supports Left, Right, Top, Bottom variants', () => {
        expect(Side.Left).toBe('Left');
        expect(Side.Right).toBe('Right');
        expect(Side.Top).toBe('Top');
        expect(Side.Bottom).toBe('Bottom');

        const topPort = new Input({ name: 'clr', side: Side.Top });
        expect(topPort.side).toBe(Side.Top);

        const bottomPort = new Input({ name: 'rst', side: Side.Bottom });
        expect(bottomPort.side).toBe(Side.Bottom);
    });

    test('Connection constraint validation (linked module)', () => {
        class ClockModule extends Module {}
        class DataModule extends Module {}

        const clkInput = new Input({
            name: 'clk',
            allowedSources: ['ClockModule', ClockModule]
        });

        expect(clkInput.isConnectionAllowed(new ClockModule({ name: 'CLK' }))).toBe(true);
        expect(clkInput.isConnectionAllowed('ClockModule')).toBe(true);
        expect(clkInput.isConnectionAllowed(new DataModule({ name: 'DATA' }))).toBe(false);
    });

    test('Module dynamic rectangular geometry calculation', () => {
        const smallMod = new Module({
            name: 'INV',
            inputs: [new Input({ name: 'in' })],
            outputs: [new Output({ name: 'out' })]
        });
        const smallDims = smallMod.calculateDimensions();
        expect(smallDims.width).toBeGreaterThanOrEqual(60);
        expect(smallDims.height).toBeGreaterThanOrEqual(40);

        const aluMod = new Module({
            name: 'ArithmeticLogicUnit32Bit',
            inputs: [
                new Input({ name: 'a', bits: 32 }),
                new Input({ name: 'b', bits: 32 }),
                new Input({ name: 'op', bits: 4 }),
                new Input({ name: 'cin' }),
                new Input({ name: 'clk' })
            ],
            outputs: [
                new Output({ name: 'res', bits: 32 }),
                new Output({ name: 'cout' }),
                new Output({ name: 'overflow' }),
                new Output({ name: 'zero' })
            ]
        });
        const aluDims = aluMod.calculateDimensions();
        // Width must adapt to long label and pin counts
        expect(aluDims.width).toBeGreaterThanOrEqual(180);
        // Height must adapt to 5 vertical pins
        expect(aluDims.height).toBeGreaterThanOrEqual(5 * 24 + 16);
    });
});

describe('Custom Library System: UniBo Library Registry', () => {
    test('UniBo library is registered and accessible', () => {
        const unibo = registry.get('UniBo');
        expect(unibo).toBeDefined();
        expect(unibo.name).toBe('UniBo');
        expect(unibo.version).toBe('1.0.0');

        const names = unibo.getModuleNames();
        expect(names).toContain('FFD');
        expect(names).toContain('FFT');
        expect(names).toContain('ALU');
        expect(names).toContain('Decoder');
        expect(names).toContain('Counter');
        expect(names).toContain('CounterEn');
        expect(names).toContain('CounterRst');
        expect(names).toContain('CounterEnRst');
        expect(names).toContain('CounterEnPriorRst');
        expect(names).toContain('CounterRstPriorEn');
        expect(names.length).toBeGreaterThanOrEqual(20);
    });

    test('Registry can find modules across libraries', () => {
        const ffd = registry.findModule('FFD');
        expect(ffd).toBeDefined();
        expect(ffd.name).toBe('FFD');

        // Check FFD pin sides strictly matching spec:
        // clk, d on Left, rst on Bottom, q, qn on Right
        const clkPin = ffd.inputs.find(p => p.name === 'clk');
        const dPin = ffd.inputs.find(p => p.name === 'd');
        const rstPin = ffd.inputs.find(p => p.name === 'rst');
        const qPin = ffd.outputs.find(p => p.name === 'q');
        const qnPin = ffd.outputs.find(p => p.name === 'qn');

        expect(clkPin).toBeDefined();
        expect(clkPin.side).toBe(Side.Left);
        expect(dPin).toBeDefined();
        expect(dPin.side).toBe(Side.Left);
        expect(rstPin).toBeDefined();
        expect(rstPin.side).toBe(Side.Bottom);
        expect(qPin).toBeDefined();
        expect(qPin.side).toBe(Side.Right);
        expect(qnPin).toBeDefined();
        expect(qnPin.side).toBe(Side.Right);

        // Ensure no redundant duplicate pins in FFD
        expect(ffd.inputs.find(p => p.name === 'clock')).toBeUndefined();
        expect(ffd.inputs.find(p => p.name === 'arst')).toBeUndefined();

        const alu = registry.findModule('ALU');
        expect(alu).toBeDefined();
        expect(alu.name).toBe('ALU');
    });

    test('Combined Verilog bundle includes UniBo RTL/blackbox code', () => {
        const bundle = registry.getCombinedVerilogBundle();
        expect(bundle).toContain('UniBo');
        expect(bundle).toContain('UNIBO_MODULES_V');
        expect(bundle).toContain('module FFD');
        expect(bundle).toContain('module CounterEnRst');
        expect(bundle).toContain('module ALU');
    });
});

describe('Core Engine: 4 Built-in Categories Verification', () => {
    test('Category 1: System Inputs exist and inherit from IO', () => {
        expect(cells.Input).toBeDefined();
        expect(cells.Button).toBeDefined();
        const inInst = new cells.Input({ net: 'in_sig', bits: 1 });
        expect(inInst.get('bits')).toBe(1);
    });

    test('Category 2: System Outputs exist and inherit from IO', () => {
        expect(cells.Output).toBeDefined();
        expect(cells.Lamp).toBeDefined();
        const outInst = new cells.Output({ net: 'out_sig', bits: 1 });
        expect(outInst.get('bits')).toBe(1);
    });

    test('Category 3: Clock is a compact cell without text label', () => {
        expect(cells.Clock).toBeDefined();
        const clk = new cells.Clock();
        expect(clk.size().width).toBe(34);
        expect(clk.size().height).toBe(34);
    });

    test('Category 4: Generic Rectangular Module (Subcircuit / GenericBox)', () => {
        expect(cells.Subcircuit).toBeDefined();
        expect(cells.GenericBox).toBe(cells.Subcircuit);
        expect(cells.GenericBoxView).toBe(cells.SubcircuitView);
    });
});

describe('UI Engineering: Lens Bar (Barra Lente)', () => {
    test('markupZoom uses minimal stroke SVG instead of emoji', () => {
        const mz = cells.Box.prototype.markupZoom;
        expect(mz).toBeDefined();
        expect(mz[0].className).toContain('zoom-bar');
        
        const pill = mz[0].children[0].children[0];
        expect(pill.className).toBe('zoom-pill');

        const a = pill.children[0];
        expect(a.className).toBe('zoom');
        expect(a.textContent).toBeUndefined(); // No emoji text

        const svg = a.children[0];
        expect(svg.tagName).toBe('svg');
        expect(svg.attributes.viewBox).toBe('0 0 16 16');
        expect(svg.children.some(c => c.tagName === 'circle')).toBe(true);
        expect(svg.children.some(c => c.tagName === 'path')).toBe(true);
    });
});

describe('UI Engineering: Gate Graphics & Multi-Input Support', () => {
    test('Gate 2-input zero-distance contact points', () => {
        const andGate = new cells.And({ inputs: 2 });
        expect(andGate.size()).toEqual({ width: 60, height: 32 });

        const inPorts = andGate.getPortsPositions('in');
        expect(inPorts.in1.x).toBe(19);
        expect(inPorts.in1.y).toBe(8);
        expect(inPorts.in2.x).toBe(19);
        expect(inPorts.in2.y).toBe(24);

        const outPort = andGate.getPortsPositions('out');
        expect(outPort.out.x).toBe(51);
        expect(outPort.out.y).toBe(16);
    });

    test('Gate multi-input vertical scaling (3, 4, 8 inputs)', () => {
        const and3 = new cells.And({ inputs: 3 });
        expect(and3.size()).toEqual({ width: 60, height: 48 });
        expect(and3.getPortsPositions('out').out.y).toBe(24);
        expect(Object.keys(and3.getPortsPositions('in'))).toHaveLength(3);

        const or4 = new cells.Or({ inputs: 4 });
        expect(or4.size()).toEqual({ width: 60, height: 64 });
        expect(or4.getPortsPositions('out').out.y).toBe(32);
        const orInPorts = or4.getPortsPositions('in');
        expect(orInPorts.in1.y).toBe(8);
        expect(orInPorts.in2.y).toBe(24);
        expect(orInPorts.in3.y).toBe(40);
        expect(orInPorts.in4.y).toBe(56);

        const xor8 = new cells.Xor({ inputs: 8 });
        expect(xor8.size()).toEqual({ width: 60, height: 128 });
        expect(xor8.getPortsPositions('out').out.y).toBe(64);
        expect(Object.keys(xor8.getPortsPositions('in'))).toHaveLength(8);
    });

    test('Inverting multi-input gate bubble positioning', () => {
        const nand4 = new cells.Nand({ inputs: 4 });
        expect(nand4.size()).toEqual({ width: 60, height: 64 });
        expect(nand4.getPortsPositions('out').out.x).toBe(60);
        expect(nand4.getPortsPositions('out').out.y).toBe(32);
        expect(nand4.attr('neg_bubble/cy')).toBe(32);

        const nor4 = new cells.Nor({ inputs: 4 });
        expect(nor4.getPortsPositions('out').out.x).toBe(60);
        expect(nor4.getPortsPositions('out').out.y).toBe(32);
    });
});

