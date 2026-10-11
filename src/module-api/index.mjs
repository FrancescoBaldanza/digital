"use strict";

/**
 * @fileoverview Digital Circuit OOP Module API
 * Formal object-oriented definitions for custom digital modules,
 * multi-bit bus I/O ports, pin layouts, and shape geometries.
 */

export {
    Side,
    isValidSide,
    normalizeSide,
    PinStyle,
    Port,
    Input,
    Output
} from './port.mjs';

export {
    Shape,
    ModuleShape
} from './shape.mjs';

export {
    Module,
    ValidationError
} from './module.mjs';
