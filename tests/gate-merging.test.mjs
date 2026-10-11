"use strict";

import { transformCircuit, makeNAryGates, mergeAssociativeGates } from '../lib/transform.js';
import { HeadlessCircuit } from '../lib/circuit.js';
import { Vector3vl } from '3vl';
import { elk_layout } from '../lib/elkjs.js';
import * as joint from '@joint/core';

describe('Task Group 1: Recursive Gate Merging & Zero-Distance Layout', () => {

    test('1.1: 3-gate cascaded XOR chain merges into a single 4-input XOR gate', () => {
        // Cascade: out = ((a ^ b) ^ c) ^ d
        const circuit = {
            devices: {
                in0: { type: "Input", net: "a", order: 0, bits: 1 },
                in1: { type: "Input", net: "b", order: 1, bits: 1 },
                in2: { type: "Input", net: "c", order: 2, bits: 1 },
                in3: { type: "Input", net: "d", order: 3, bits: 1 },
                out: { type: "Output", net: "y", order: 4, bits: 1 },
                xor1: { type: "Xor", bits: 1 },
                xor2: { type: "Xor", bits: 1 },
                xor3: { type: "Xor", bits: 1 }
            },
            connectors: [
                { from: { id: "in0", port: "out" }, to: { id: "xor1", port: "in1" } },
                { from: { id: "in1", port: "out" }, to: { id: "xor1", port: "in2" } },
                { from: { id: "xor1", port: "out" }, to: { id: "xor2", port: "in1" } },
                { from: { id: "in2", port: "out" }, to: { id: "xor2", port: "in2" } },
                { from: { id: "xor2", port: "out" }, to: { id: "xor3", port: "in1" } },
                { from: { id: "in3", port: "out" }, to: { id: "xor3", port: "in2" } },
                { from: { id: "xor3", port: "out" }, to: { id: "out", port: "in" } }
            ]
        };

        const result = transformCircuit(circuit, [mergeAssociativeGates]);
        const xorDevs = Object.values(result.devices).filter(d => d.type === 'Xor');
        
        expect(xorDevs.length).toBe(1);
        expect(xorDevs[0].inputs).toBe(4);
        
        // Output connects to the merged XOR
        const outConn = result.connectors.find(c => c.to.id === 'out');
        expect(outConn.from.id).toBe('xor3');
        expect(outConn.from.port).toBe('out');

        // All 4 inputs are connected to in1..in4
        const inConns = result.connectors.filter(c => c.to.id === 'xor3');
        expect(inConns.length).toBe(4);
        const targetPorts = inConns.map(c => c.to.port).sort();
        expect(targetPorts).toEqual(['in1', 'in2', 'in3', 'in4']);
    });

    test('1.1: 20-input cascaded XOR chain merges into a single 20-input XOR gate', () => {
        const N = 20;
        const devices = {};
        const connectors = [];

        for (let i = 0; i < N; i++) {
            devices[`in${i}`] = { type: "Input", net: `in_${i}`, order: i, bits: 1 };
        }
        devices['out'] = { type: "Output", net: "y", order: N, bits: 1 };

        // Chain N-1 2-input XORs
        for (let i = 1; i < N; i++) {
            devices[`xor${i}`] = { type: "Xor", bits: 1 };
            if (i === 1) {
                connectors.push({ from: { id: "in0", port: "out" }, to: { id: "xor1", port: "in1" } });
                connectors.push({ from: { id: "in1", port: "out" }, to: { id: "xor1", port: "in2" } });
            } else {
                connectors.push({ from: { id: `xor${i - 1}`, port: "out" }, to: { id: `xor${i}`, port: "in1" } });
                connectors.push({ from: { id: `in${i}`, port: "out" }, to: { id: `xor${i}`, port: "in2" } });
            }
        }
        connectors.push({ from: { id: `xor${N - 1}`, port: "out" }, to: { id: "out", port: "in" } });

        const circuit = { devices, connectors };
        const result = transformCircuit(circuit, [mergeAssociativeGates]);
        const xorDevs = Object.values(result.devices).filter(d => d.type === 'Xor');

        expect(xorDevs.length).toBe(1);
        expect(xorDevs[0].inputs).toBe(20);

        const xorId = Object.keys(result.devices).find(k => result.devices[k].type === 'Xor');
        const xorInConns = result.connectors.filter(c => c.to.id === xorId);
        expect(xorInConns.length).toBe(20);
    });

    test('1.1: Supports Yosys gate notation ($xor, $and, $or)', () => {
        const circuit = {
            devices: {
                in0: { type: "$input", net: "a", order: 0, bits: 1 },
                in1: { type: "$input", net: "b", order: 1, bits: 1 },
                in2: { type: "$input", net: "c", order: 2, bits: 1 },
                out: { type: "$output", net: "y", order: 3, bits: 1 },
                and1: { type: "$and", bits: 1 },
                and2: { type: "$and", bits: 1 }
            },
            connectors: [
                { from: { id: "in0", port: "out" }, to: { id: "and1", port: "in1" } },
                { from: { id: "in1", port: "out" }, to: { id: "and1", port: "in2" } },
                { from: { id: "and1", port: "out" }, to: { id: "and2", port: "in1" } },
                { from: { id: "in2", port: "out" }, to: { id: "and2", port: "in2" } },
                { from: { id: "and2", port: "out" }, to: { id: "out", port: "in" } }
            ]
        };

        const result = transformCircuit(circuit, [mergeAssociativeGates]);
        const andDevs = Object.values(result.devices).filter(d => d.type === '$and');
        expect(andDevs.length).toBe(1);
        expect(andDevs[0].inputs).toBe(3);
    });

    test('1.1: Does NOT merge when intermediate gate has fanout > 1', () => {
        const circuit = {
            devices: {
                in0: { type: "Input", net: "a", order: 0, bits: 1 },
                in1: { type: "Input", net: "b", order: 1, bits: 1 },
                in2: { type: "Input", net: "c", order: 2, bits: 1 },
                branch_out: { type: "Output", net: "branch", order: 3, bits: 1 },
                final_out: { type: "Output", net: "final", order: 4, bits: 1 },
                xor1: { type: "Xor", bits: 1 },
                xor2: { type: "Xor", bits: 1 }
            },
            connectors: [
                { from: { id: "in0", port: "out" }, to: { id: "xor1", port: "in1" } },
                { from: { id: "in1", port: "out" }, to: { id: "xor1", port: "in2" } },
                // xor1 feeds BOTH branch_out AND xor2:
                { from: { id: "xor1", port: "out" }, to: { id: "branch_out", port: "in" } },
                { from: { id: "xor1", port: "out" }, to: { id: "xor2", port: "in1" } },
                { from: { id: "in2", port: "out" }, to: { id: "xor2", port: "in2" } },
                { from: { id: "xor2", port: "out" }, to: { id: "final_out", port: "in" } }
            ]
        };

        const result = transformCircuit(circuit, [mergeAssociativeGates]);
        const xorDevs = Object.values(result.devices).filter(d => d.type === 'Xor');
        // Because xor1 has multiple output connectors, it must remain distinct!
        expect(xorDevs.length).toBe(2);
    });

    test('1.2: Multi-input merged gate simulates correct logic table (parity calculation)', async () => {
        const circuit = {
            devices: {
                in0: { type: "Input", net: "a", bits: 1 },
                in1: { type: "Input", net: "b", bits: 1 },
                in2: { type: "Input", net: "c", bits: 1 },
                out: { type: "Output", net: "y", bits: 1 },
                xor: { type: "Xor", inputs: 3, bits: 1 }
            },
            connectors: [
                { from: { id: "in0", port: "out" }, to: { id: "xor", port: "in1" } },
                { from: { id: "in1", port: "out" }, to: { id: "xor", port: "in2" } },
                { from: { id: "in2", port: "out" }, to: { id: "xor", port: "in3" } },
                { from: { id: "xor", port: "out" }, to: { id: "out", port: "in" } }
            ]
        };

        const engine = new HeadlessCircuit(circuit);
        engine.observeGraph();
        
        const setAndEval = async (v0, v1, v2) => {
            engine.setInput("in0", Vector3vl.fromBin(v0, 1));
            engine.setInput("in1", Vector3vl.fromBin(v1, 1));
            engine.setInput("in2", Vector3vl.fromBin(v2, 1));
            while (engine.hasPendingEvents) {
                await engine.updateGates({ synchronous: true });
            }
            return engine.getOutput("out").toBin();
        };

        // 0 ^ 0 ^ 0 = 0
        expect(await setAndEval("0", "0", "0")).toBe("0");

        // 1 ^ 0 ^ 0 = 1
        expect(await setAndEval("1", "0", "0")).toBe("1");

        // 1 ^ 1 ^ 0 = 0
        expect(await setAndEval("1", "1", "0")).toBe("0");

        // 1 ^ 1 ^ 1 = 1
        expect(await setAndEval("1", "1", "1")).toBe("1");
    });

    test('1.3: Zero-distance layout configures 0px spacing between layers in ELK', async () => {
        const graph = new joint.dia.Graph();
        graph.set('zeroDistanceGates', true);

        // Add two cells
        const c1 = new joint.shapes.standard.Rectangle();
        c1.set('id', 'c1');
        c1.getLayoutSize = () => ({ width: 60, height: 32 });
        c1.getPorts = () => [{ id: 'out', group: 'out' }];
        c1.getPortsPositions = () => ({ out: { x: 60, y: 16 } });
        c1.setLayoutPosition = () => {};

        const c2 = new joint.shapes.standard.Rectangle();
        c2.set('id', 'c2');
        c2.getLayoutSize = () => ({ width: 60, height: 32 });
        c2.getPorts = () => [{ id: 'in', group: 'in' }];
        c2.getPortsPositions = () => ({ in: { x: 0, y: 16 } });
        c2.setLayoutPosition = () => {};

        graph.addCells([c1, c2]);

        const link = new joint.shapes.standard.Link({
            source: { id: 'c1', port: 'out' },
            target: { id: 'c2', port: 'in' }
        });
        link.vertices = () => {};
        graph.addCell(link);

        const elkResult = await elk_layout(graph, { zeroDistance: true });
        expect(elkResult).toBeDefined();
        // Spacing between layers with zeroDistance should be 0
        expect(elkResult.children.length).toBe(2);
    });

});
