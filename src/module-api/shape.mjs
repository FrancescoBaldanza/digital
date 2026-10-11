"use strict";

import { Side, normalizeSide, Port } from './port.mjs';

/**
 * Shape geometry and pin distribution for rectangular digital circuit modules.
 */
export class Shape {
    /**
     * @param {Object} [options={}]
     * @param {Object} [options.sides={}] - Initial mapping of ports per side
     * @param {number} [options.minWidth=80] - Minimum width in pixels (must be >= 60)
     * @param {number} [options.minHeight=40] - Minimum height in pixels (must be >= 40)
     * @param {number} [options.pinPitch=24] - Vertical distance between pins
     * @param {number} [options.horizontalPitch=28] - Horizontal distance between top/bottom pins
     */
    constructor(options = {}) {
        const rawSides = options.sides || {};
        this.sides = {
            [Side.Left]: [...(rawSides[Side.Left] || rawSides[Side.LEFT] || [])],
            [Side.Right]: [...(rawSides[Side.Right] || rawSides[Side.RIGHT] || [])],
            [Side.Top]: [...(rawSides[Side.Top] || rawSides[Side.TOP] || [])],
            [Side.Bottom]: [...(rawSides[Side.Bottom] || rawSides[Side.BOTTOM] || [])]
        };

        this.minWidth = Math.max(60, options.minWidth || 80);
        this.minHeight = Math.max(40, options.minHeight || 40);
        this.pinPitch = options.pinPitch || 24;
        this.horizontalPitch = options.horizontalPitch || 28;
    }

    /**
     * Add a port to the shape layout on a specific side.
     * @param {Port} port
     * @param {string} [side] - Optional override side
     */
    addPort(port, side) {
        const targetSide = normalizeSide(side || port.side || Side.Left);
        this.sides[targetSide].push(port);
    }

    /**
     * Get all ports positioned on a given side.
     * @param {string} side
     * @returns {Array<Port>}
     */
    getPortsOnSide(side) {
        const normalized = normalizeSide(side);
        return this.sides[normalized] || [];
    }

    /**
     * Get the count of pins on a given side.
     * @param {string} side
     * @returns {number}
     */
    countOnSide(side) {
        return this.getPortsOnSide(side).length;
    }

    /**
     * Compute dynamic rectangular dimensions (width, height)
     * adapting to pin counts on each side and label length.
     * @param {string} [moduleName='']
     * @returns {{width: number, height: number}}
     */
    calculateDimensions(moduleName = '') {
        const leftCount = this.countOnSide(Side.Left);
        const rightCount = this.countOnSide(Side.Right);
        const topCount = this.countOnSide(Side.Top);
        const bottomCount = this.countOnSide(Side.Bottom);

        const verticalPinCount = Math.max(leftCount, rightCount, 1);
        const horizontalPinCount = Math.max(topCount, bottomCount, 0);

        // Height adapts to vertical pins with pinPitch and margin
        const heightCalc = verticalPinCount * this.pinPitch + 16;
        const height = Math.max(this.minHeight, heightCalc);

        // Width adapts to horizontal pins, label length, and spacing
        const labelEstimateWidth = (moduleName ? String(moduleName).length : 0) * 8 + 36;
        const horizontalPinsWidth = horizontalPinCount * this.horizontalPitch + 30;
        const width = Math.max(this.minWidth, labelEstimateWidth, horizontalPinsWidth);

        return { width, height };
    }

    /**
     * Calculates the coordinate offsets of each port on the perimeter of the module.
     * @param {{width: number, height: number}} [dimensions]
     * @param {string} [moduleName='']
     * @returns {Object.<string, {x: number, y: number, side: string, index: number}>}
     */
    getPortPositions(dimensions, moduleName = '') {
        const dims = dimensions || this.calculateDimensions(moduleName);
        const positions = {};

        // Left side
        const leftPorts = this.getPortsOnSide(Side.Left);
        leftPorts.forEach((p, idx) => {
            positions[p.name] = {
                x: 0,
                y: 16 + idx * this.pinPitch,
                side: Side.Left,
                index: idx
            };
        });

        // Right side
        const rightPorts = this.getPortsOnSide(Side.Right);
        rightPorts.forEach((p, idx) => {
            positions[p.name] = {
                x: dims.width,
                y: 16 + idx * this.pinPitch,
                side: Side.Right,
                index: idx
            };
        });

        // Top side
        const topPorts = this.getPortsOnSide(Side.Top);
        topPorts.forEach((p, idx) => {
            positions[p.name] = {
                x: 20 + idx * this.horizontalPitch,
                y: 0,
                side: Side.Top,
                index: idx
            };
        });

        // Bottom side
        const bottomPorts = this.getPortsOnSide(Side.Bottom);
        bottomPorts.forEach((p, idx) => {
            positions[p.name] = {
                x: 20 + idx * this.horizontalPitch,
                y: dims.height,
                side: Side.Bottom,
                index: idx
            };
        });

        return positions;
    }
}

/**
 * Backward-compatible alias for Shape.
 */
export const ModuleShape = Shape;
