"use strict";

import { Side, Port, Input, Output } from './port.mjs';
import { Shape, ModuleShape } from './shape.mjs';

/**
 * Custom error thrown during module specification validation.
 */
export class ValidationError extends Error {
    /**
     * @param {string} message
     * @param {string[]} [errors=[]]
     */
    constructor(message, errors = []) {
        super(message);
        this.name = 'ValidationError';
        this.errors = errors;
    }
}

/**
 * Base Module class.
 * Defines a digital module with dynamic auto-sizing geometry,
 * configurable input/output ports, connection constraints, and formal validation.
 */
export class Module {
    /**
     * @param {Object} options
     * @param {string} options.name - Name of the module (e.g. 'ALU', 'FF_D', 'Counter', '\FF-D')
     * @param {Array<Input|Object>} [options.inputs=[]] - List of input ports
     * @param {Array<Output|Object>} [options.outputs=[]] - List of output ports
     * @param {Shape} [options.shape] - Custom shape configuration
     * @param {string} [options.verilogDefinition] - Optional Verilog HDL implementation
     * @param {Object} [options.metadata] - Extra metadata (description, author, category)
     */
    constructor(options = {}) {
        if (!options.name || typeof options.name !== 'string' || options.name.trim() === '') {
            throw new Error("Module requires a non-empty 'name'");
        }
        this.name = String(options.name).trim();
        this.inputs = (options.inputs || []).map(p => (p instanceof Port ? p : new Input(p)));
        this.outputs = (options.outputs || []).map(p => (p instanceof Port ? p : new Output(p)));
        this.verilogDefinition = options.verilogDefinition || null;
        this.metadata = options.metadata || {};

        if (options.shape instanceof Shape) {
            this.shape = options.shape;
        } else {
            this._buildShape();
        }
    }

    _buildShape() {
        const shape = new Shape();
        for (const input of this.inputs) {
            shape.addPort(input, input.side || Side.Left);
        }
        for (const output of this.outputs) {
            shape.addPort(output, output.side || Side.Right);
        }
        this.shape = shape;
    }

    /**
     * Add an input port to the module.
     * @param {Input|Object} input
     * @returns {Input}
     */
    addInput(input) {
        const port = input instanceof Port ? input : new Input(input);
        this.inputs.push(port);
        this.shape.addPort(port, port.side || Side.Left);
        return port;
    }

    /**
     * Add an output port to the module.
     * @param {Output|Object} output
     * @returns {Output}
     */
    addOutput(output) {
        const port = output instanceof Port ? output : new Output(output);
        this.outputs.push(port);
        this.shape.addPort(port, port.side || Side.Right);
        return port;
    }

    /**
     * Find a port by name across inputs and outputs.
     * @param {string} name
     * @returns {Port|undefined}
     */
    getPort(name) {
        return this.inputs.find(p => p.name === name) || this.outputs.find(p => p.name === name);
    }

    /**
     * Compute dynamic rectangular dimensions (width, height)
     * adapting to pin counts on each side and label length.
     * @returns {{width: number, height: number}}
     */
    calculateDimensions() {
        return this.shape.calculateDimensions(this.name);
    }

    /**
     * Validates this module definition according to contract rules.
     * Checks identifier syntax (including Verilog escaped identifiers like \FF-D), duplicate port names, bus widths, and shape bounds.
     * @returns {{valid: boolean, errors: string[]}}
     */
    validate() {
        const errors = [];

        // 1. Module name identifier validation: standard alphanumeric identifier or Verilog escaped identifier (\identifier)
        const standardIdentifier = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
        const escapedIdentifier = /^\\[\x21-\x7E]+$/;

        if (!standardIdentifier.test(this.name) && !escapedIdentifier.test(this.name)) {
            errors.push(`Module name '${this.name}' is invalid. Must be an alphanumeric identifier or a valid Verilog escaped identifier.`);
        }

        // 2. Minimum port presence
        if (this.inputs.length === 0 && this.outputs.length === 0) {
            errors.push(`Module '${this.name}' must have at least one input or output port.`);
        }

        // 3. Port name uniqueness and validity
        const seenNames = new Set();
        const allPorts = [...this.inputs, ...this.outputs];

        for (const port of allPorts) {
            if (!port.name || typeof port.name !== 'string' || port.name.trim() === '') {
                errors.push(`Module '${this.name}' contains a port with an empty or missing name.`);
                continue;
            }

            if (seenNames.has(port.name)) {
                errors.push(`Module '${this.name}' has duplicate port name '${port.name}'.`);
            } else {
                seenNames.add(port.name);
            }

            if (!Number.isInteger(port.bits) || port.bits < 1) {
                errors.push(`Port '${port.name}' on module '${this.name}' must have bit width >= 1 (found ${port.bits}).`);
            }
        }

        // 4. Shape dimension bounds check
        const dims = this.calculateDimensions();
        if (dims.width < 60 || dims.height < 40) {
            errors.push(`Module '${this.name}' dimensions ${dims.width}x${dims.height} violate minimum 60x40 bound.`);
        }

        return {
            valid: errors.length === 0,
            errors
        };
    }

    /**
     * Validates module and throws ValidationError if invalid.
     * @throws {ValidationError}
     */
    validateOrThrow() {
        const result = this.validate();
        if (!result.valid) {
            throw new ValidationError(
                `Validation failed for module '${this.name}':\n- ${result.errors.join('\n- ')}`,
                result.errors
            );
        }
        return true;
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

    /**
     * Generate Verilog module declaration header.
     * @returns {string}
     */
    toVerilogHeader() {
        const ports = [];
        for (const input of this.inputs) {
            const bus = input.bits > 1 ? `[${input.bits - 1}:0] ` : '';
            ports.push(`    input wire ${bus}${input.name}`);
        }
        for (const output of this.outputs) {
            const bus = output.bits > 1 ? `[${output.bits - 1}:0] ` : '';
            ports.push(`    output wire ${bus}${output.name}`);
        }
        return `module ${this.name} (\n${ports.join(',\n')}\n);`;
    }
}

export { Shape, ModuleShape };
