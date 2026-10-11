"use strict";

import * as joint from "@joint/core";
import * as cells from "../lib/cells.js";

describe("Task Group 4: Subcircuit Hierarchy & IC Inspection (\"Sbirciare\")", () => {
    test("4.1 Subcircuit / GenericBox compact IC rendering and dimensions", () => {
        const graph = new joint.dia.Graph();
        const inA = new cells.Input({ net: "a", order: 0, bits: 1 });
        const inB = new cells.Input({ net: "b", order: 1, bits: 8 });
        const outS = new cells.Output({ net: "s", order: 2, bits: 8 });
        const outCo = new cells.Output({ net: "cout", order: 3, bits: 1 });

        graph.addCells([inA, inB, outS, outCo]);

        const sc = new cells.Subcircuit({
            label: "ALU8_Unit",
            celltype: "ALU",
            graph: graph
        });

        expect(sc.get("label")).toBe("ALU8_Unit");
        expect(sc.get("celltype")).toBe("ALU");

        const size = sc.size();
        expect(size.width).toBeGreaterThanOrEqual(80);
        expect(size.height).toBeGreaterThanOrEqual(36);

        const ports = sc.get("ports").items;
        expect(ports).toBeDefined();
        expect(ports.some(p => p.id === "a" && p.dir === "in")).toBe(true);
        expect(ports.some(p => p.id === "b" && p.dir === "in" && p.bits === 8)).toBe(true);
        expect(ports.some(p => p.id === "s" && p.dir === "out" && p.bits === 8)).toBe(true);
        expect(ports.some(p => p.id === "cout" && p.dir === "out")).toBe(true);
    });

    test("4.2 SubcircuitView interaction events support both zoom click and double click", () => {
        expect(cells.SubcircuitView.prototype.events["click a.zoom"]).toBe("zoomInCircuit");
        expect(cells.SubcircuitView.prototype.events["dblclick"]).toBe("onDoubleClick");
        expect(typeof cells.SubcircuitView.prototype.zoomInCircuit).toBe("function");
        expect(typeof cells.SubcircuitView.prototype.onDoubleClick).toBe("function");
    });

    test("4.3 Triggering open:subcircuit event on paper notifies listener for modal/overlay inspection", () => {
        const graph = new joint.dia.Graph();
        graph.addCells([
            new cells.Input({ net: "clk" }),
            new cells.Output({ net: "q" })
        ]);

        const sc = new cells.Subcircuit({
            label: "DFF_Reg",
            celltype: "FFD",
            graph: graph
        });

        let openedModel = null;
        const mockPaper = {
            trigger: (evt, model) => {
                if (evt === "open:subcircuit") {
                    openedModel = model;
                }
            }
        };

        const view = {
            paper: mockPaper,
            model: sc
        };

        cells.SubcircuitView.prototype.zoomInCircuit.call(view, { stopPropagation: () => {} });
        expect(openedModel).toBe(sc);

        openedModel = null;
        cells.SubcircuitView.prototype.onDoubleClick.call(view, { stopPropagation: () => {} });
        expect(openedModel).toBe(sc);
    });

    test("4.4 GenericBox alias preserves identical Subcircuit inspection capabilities", () => {
        expect(cells.GenericBox).toBe(cells.Subcircuit);
        expect(cells.GenericBoxView).toBe(cells.SubcircuitView);
    });
});
