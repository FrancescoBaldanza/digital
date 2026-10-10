"use strict";

import { Side, Port, Input, Output } from './port.mjs';

/**
 * Shape calculation representing the 4 sides of the module rectangle.
 */
export class ModuleShape {
    constructor(sides = {}) {
        this.sides = {
            [Side.LEFT]: sides[Side.LEFT] || [],
            [Side.RIGHT]: sides[Side.RIGHT] || [],
            [Side.TOP]: sides[Side.TOP] || [],
            [Side.BOTTOM]: sides[Side.BOTTOM] || []
        };
    }

    getPortsOnSide(side) {
        return this.sides[side] || [];
    }

    countOnSide(side) {
        return (this.sides[side] || []).length;
    }
}

/**
 * Base Module class.
 * Defines a digital module with dynamic auto-sizing geometry,
 * configurable input/output ports, and connection constraints.
 */
export class Module {
    /**
     * @param {Object} options
     * @param {string} options.name - Name of the module (e.g. 'ALU', 'FF_D', 'Counter')
     * @param {Array<Input>} [options.inputs=[]] - List of input ports
     * @param {Array<Output>} [options.outputs=[]] - List of output ports
     * @param {string} [options.verilogDefinition] - Optional Verilog HDL implementation
     * @param {Object} [options.metadata] - Extra metadata (description, author, category)
     */
    constructor(options = {}) {
        if (!options.name) {
            throw new Error("Module requires a non-empty 'name'");
        }
        this.name = String(options.name);
        this.inputs = (options.inputs || []).map(p => (p instanceof Port ? p : new Input(p)));
        this.outputs = (options.outputs || []).map(p => (p instanceof Port ? p : new Output(p)));
        this.verilogDefinition = options.verilogDefinition || null;
        this.metadata = options.metadata || {};

        this._buildShape();
    }

    _buildShape() {
        const sides = {
            [Side.LEFT]: [],
            [Side.RIGHT]: [],
            [Side.TOP]: [],
            [Side.BOTTOM]: []
        };

        for (const input of this.inputs) {
            const side = input.side || Side.LEFT;
            sides[side].push(input);
        }

        for (const output of this.outputs) {
            const side = output.side || Side.RIGHT;
            sides[side].push(output);
        }

        this.shape = new ModuleShape(sides);
    }

    /**
     * Compute dynamic rectangular dimensions (width, height)
     * adapting to pin counts on each side and label length.
     * @returns {{width: number, height: number}}
     */
    calculateDimensions() {
        const leftCount = this.shape.countOnSide(Side.LEFT);
        const rightCount = this.shape.countOnSide(Side.RIGHT);
        const topCount = this.shape.countOnSide(Side.TOP);
        const bottomCount = this.shape.countOnSide(Side.BOTTOM);

        const verticalPinCount = Math.max(leftCount, rightCount, 1);
        const horizontalPinCount = Math.max(topCount, bottomCount, 0);

        // Height adapts to vertical pins with 24px pitch and 20px header/margin
        const height = Math.max(40, verticalPinCount * 24 + 16);

        // Width adapts to horizontal pins, label length, and spacing
        const labelEstimateWidth = this.name.length * 8 + 36;
        const horizontalPinsWidth = horizontalPinCount * 28 + 30;
        const width = Math.max(80, labelEstimateWidth, horizontalPinsWidth);

        return { width, height };
    }

    /**
     * Validate whether a connection from source to target input port is permitted.
     * @param {string} inputPortName
     * @param {Module|string} sourceModule
     * @param {Port} [sourcePort]
     * @returns {{valid: boolean, reason?: string}}
     */
    validateConnection(inputPortName, sourceModule, sourcePort) {
        const targetInput = this.inputs.find(p => p.name === inputPortName);
        if (!targetInput) {
            return { valid: false, reason: `Port '${inputPortName}' not found on module '${this.name}'` };
        }
        if (!targetInput.isConnectionAllowed(sourceModule, sourcePort)) {
            const sourceName = typeof sourceModule === 'string' ? sourceModule : sourceModule?.name;
            return {
                valid: false,
                reason: `Module '${sourceName}' cannot be linked to input '${inputPortName}' on '${this.name}' (constraint violation)`
            };
        }
        return { valid: true };
    }
}
