"use strict";

/**
 * Valid connection sides on a rectangular module
 * @readonly
 * @enum {string}
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
 * Validates if the given string represents a valid Side.
 * @param {string} side
 * @returns {boolean}
 */
export function isValidSide(side) {
    if (typeof side !== 'string') return false;
    const lower = side.toLowerCase();
    return lower === 'left' || lower === 'right' || lower === 'top' || lower === 'bottom';
}

/**
 * Normalizes a side string to canonical 'Left' | 'Right' | 'Top' | 'Bottom'.
 * @param {string} side
 * @returns {'Left' | 'Right' | 'Top' | 'Bottom'}
 */
export function normalizeSide(side) {
    if (!isValidSide(side)) {
        throw new Error(`Invalid side '${side}'. Must be one of Side.Left, Side.Right, Side.Top, Side.Bottom.`);
    }
    const lower = side.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

/**
 * Pin style visual types.
 * @readonly
 * @enum {string}
 */
export const PinStyle = Object.freeze({
    STANDARD: 'standard',
    CLOCK: 'clock',
    INVERTED: 'inverted',
    BUS: 'bus'
});

/**
 * Base Port representation for Module I/O pins.
 */
export class Port {
    /**
     * @param {Object} options
     * @param {string} options.name - Pin identifier / name (e.g. 'clk', 'd', 'q')
     * @param {string} [options.side] - 'Left' | 'Right' | 'Top' | 'Bottom'
     * @param {number} [options.bits=1] - Bit width (bus width >= 1)
     * @param {any} [options.initialValue=null] - Mandatory or initial value
     * @param {Array<string|Function>} [options.allowedSources=null] - Allowed module types ('linked module' constraint)
     * @param {string} [options.pinStyle='standard'] - Visual pin style ('standard', 'clock', 'inverted', 'bus')
     * @param {string} [options.direction='in'] - Direction ('in' | 'out')
     */
    constructor(options = {}) {
        if (!options.name || typeof options.name !== 'string' || options.name.trim() === '') {
            throw new Error("Port requires a non-empty 'name'");
        }
        this.name = String(options.name).trim();

        const rawBits = options.bits !== undefined ? options.bits : 1;
        if (typeof rawBits !== 'number' || !Number.isInteger(rawBits) || rawBits < 1) {
            throw new Error(`Port '${this.name}': 'bits' must be an integer >= 1 (received ${rawBits})`);
        }
        this.bits = rawBits;

        const defaultSide = options.direction === 'out' ? Side.Right : Side.Left;
        this.side = normalizeSide(options.side || defaultSide);

        if (options.pinStyle) {
            this.pinStyle = options.pinStyle;
        } else if (this.bits > 1) {
            this.pinStyle = PinStyle.BUS;
        } else {
            this.pinStyle = PinStyle.STANDARD;
        }

        this.allowedSources = Array.isArray(options.allowedSources) ? [...options.allowedSources] : null;
        this.initialValue = options.initialValue !== undefined ? options.initialValue : null;
        this.direction = options.direction === 'out' ? 'out' : 'in';
    }

    /**
     * Returns true if this port represents an n-bit bus (bits > 1).
     * @returns {boolean}
     */
    get isBus() {
        return this.bits > 1;
    }

    /**
     * Check if a given source module/port is allowed to connect to this port.
     * @param {Object|string} sourceModule - Module instance, constructor or type name
     * @param {Port} [sourcePort] - Source Port instance
     * @returns {boolean}
     */
    isConnectionAllowed(sourceModule, sourcePort) {
        if (!this.allowedSources || this.allowedSources.length === 0) {
            return true; // No constraints: connects to any Module
        }

        const typeName = typeof sourceModule === 'string'
            ? sourceModule
            : (sourceModule?.constructor?.name || sourceModule?.name);
        const instName = typeof sourceModule === 'object' ? sourceModule?.name : null;

        return this.allowedSources.some(allowed => {
            if (typeof allowed === 'string') {
                return allowed === '*' || allowed === typeName || (instName && allowed === instName);
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
 * By default positioned on the 'Left' side with direction 'in'.
 */
export class Input extends Port {
    /**
     * @param {Object} options
     * @param {string} options.name - Pin identifier
     * @param {string} [options.side='Left'] - Side orientation
     * @param {number} [options.bits=1] - Bit width
     * @param {any} [options.initialValue=0] - Initial signal value
     * @param {Array<string|Function>} [options.allowedSources=null] - Allowed source modules
     * @param {string} [options.pinStyle] - Visual pin style
     */
    constructor(options = {}) {
        super({
            side: options.side || Side.Left,
            direction: 'in',
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
 * By default positioned on the 'Right' side with direction 'out'.
 */
export class Output extends Port {
    /**
     * @param {Object} options
     * @param {string} options.name - Pin identifier
     * @param {string} [options.side='Right'] - Side orientation
     * @param {number} [options.bits=1] - Bit width
     * @param {any} [options.initialValue=0] - Initial signal value
     * @param {Array<string|Function>} [options.allowedSources=null] - Allowed source modules
     * @param {string} [options.pinStyle] - Visual pin style
     */
    constructor(options = {}) {
        super({
            side: options.side || Side.Right,
            direction: 'out',
            ...options
        });
        this.direction = 'out';
        if (options.initialValue === undefined) {
            this.initialValue = 0;
        }
    }
}
