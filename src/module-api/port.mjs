"use strict";

/**
 * Valid connection sides on a rectangular module
 */
export const Side = Object.freeze({
    LEFT: 'Left',
    RIGHT: 'Right',
    TOP: 'Top',
    BOTTOM: 'Bottom',
    Left: 'Left',
    Right: 'Right',
    Top: 'Top',
    Bottom: 'Bottom',
    left: 'Left',
    right: 'Right',
    top: 'Top',
    bottom: 'Bottom'
});

/**
 * Base Port representation for Module I/O pins.
 */
export class Port {
    /**
     * @param {Object} options
     * @param {string} options.name - Pin identifier / name
     * @param {string} [options.side] - 'Left' | 'Right' | 'Top' | 'Bottom'
     * @param {number} [options.bits=1] - Bit width
     * @param {any} [options.initialValue=null] - Mandatory or initial value
     * @param {Array<string|Function>} [options.allowedSources=null] - Allowed module types ('linked module' constraint)
     * @param {string} [options.pinStyle='standard'] - Visual pin style ('standard', 'clock', 'inverted', 'bus')
     */
    constructor(options = {}) {
        if (!options.name) {
            throw new Error("Port requires a non-empty 'name'");
        }
        this.name = String(options.name);
        this.bits = options.bits || 1;
        this.side = options.side || Side.Left;
        this.pinStyle = options.pinStyle || 'standard';
        this.allowedSources = options.allowedSources || null; // null means all modules allowed
        this.initialValue = options.initialValue !== undefined ? options.initialValue : null;
        this.direction = 'in'; // overridden by Input / Output
    }

    /**
     * Check if a given source module/port is allowed to connect to this port.
     * @param {Object} sourceModule - Module instance or type
     * @param {Port} [sourcePort] - Source Port instance
     * @returns {boolean}
     */
    isConnectionAllowed(sourceModule, sourcePort) {
        if (!this.allowedSources || this.allowedSources.length === 0) {
            return true; // No constraints: connects to any Module
        }
        const sourceTypeName = typeof sourceModule === 'string'
            ? sourceModule
            : (sourceModule?.name || sourceModule?.constructor?.name);

        return this.allowedSources.some(allowed => {
            if (typeof allowed === 'string') {
                return allowed === sourceTypeName || allowed === '*';
            }
            if (typeof allowed === 'function') {
                return sourceModule instanceof allowed || sourceModule === allowed;
            }
            return false;
        });
    }
}

/**
 * Module Input Port.
 * By default positioned on the 'Left' side.
 */
export class Input extends Port {
    constructor(options = {}) {
        super({
            side: Side.Left,
            ...options
        });
        this.direction = 'in';
        if (options.initialValue === undefined) {
            this.initialValue = 0;
        }
    }
}

/**
 * Module Output Port.
 * By default positioned on the 'Right' side.
 */
export class Output extends Port {
    constructor(options = {}) {
        super({
            side: Side.Right,
            ...options
        });
        this.direction = 'out';
        if (options.initialValue === undefined) {
            this.initialValue = 0;
        }
    }
}
