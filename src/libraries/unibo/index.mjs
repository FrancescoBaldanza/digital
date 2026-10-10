"use strict";

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { Library, registry } from '../registry.mjs';
import { Module, Input, Output, Side } from '../../module-api/index.mjs';

// Resolve Verilog definitions bundle for synthesis if running under Node.js
let verilogBundle = '';
try {
    const currentDir = path.dirname(fileURLToPath(import.meta.url));
    const verilogPath = path.join(currentDir, 'modules.v');
    if (typeof fs.readFileSync === 'function' && fs.existsSync(verilogPath)) {
        verilogBundle = fs.readFileSync(verilogPath, 'utf8');
    }
} catch (_) {}

/**
 * UniBo Digital Modules Library
 */
export const uniboLibrary = new Library({
    name: 'UniBo',
    version: '1.0.0',
    description: 'Libreria di moduli digitali UniBo',
    verilogBundle
});

// =============================================================================
// Module Definitions: Flip-Flops
// =============================================================================

uniboLibrary.registerModule(new Module({
    name: 'FFD',
    metadata: { category: 'flip_flops', description: 'Standard D-type Flip-Flop with asynchronous reset' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'd', side: Side.Left }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'q', side: Side.Right }),
        new Output({ name: 'qn', pinStyle: 'inverted', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'FF_D',
    metadata: { category: 'flip_flops', description: 'D Flip-Flop with async reset and clear' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'd', side: Side.Left }),
        new Input({ name: 'clr', side: Side.Top }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'q', side: Side.Right }),
        new Output({ name: 'qn', pinStyle: 'inverted', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: '\\FF-D',
    metadata: { category: 'flip_flops', description: 'UniBo FF-D with uppercase signals' },
    inputs: [
        new Input({ name: 'CK', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'D', side: Side.Left }),
        new Input({ name: 'CLR', side: Side.Top }),
        new Input({ name: 'SET', side: Side.Top }),
        new Input({ name: 'RESET', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'Q', side: Side.Right }),
        new Output({ name: 'QN', pinStyle: 'inverted', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'FFT',
    metadata: { category: 'flip_flops', description: 'T-type Flip-Flop with async reset and preset' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 't', side: Side.Left }),
        new Input({ name: 'pre', side: Side.Top }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'q', side: Side.Right }),
        new Output({ name: 'qn', pinStyle: 'inverted', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: '\\FF-T',
    metadata: { category: 'flip_flops', description: 'UniBo FF-T with uppercase signals' },
    inputs: [
        new Input({ name: 'CK', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'T', side: Side.Left }),
        new Input({ name: 'PRE', side: Side.Top }),
        new Input({ name: 'RESET', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'Q', side: Side.Right }),
        new Output({ name: 'QN', pinStyle: 'inverted', side: Side.Right })
    ]
}));

// =============================================================================
// Module Definitions: Latches
// =============================================================================

uniboLibrary.registerModule(new Module({
    name: 'LatchD',
    metadata: { category: 'latches', description: 'Transparent D Latch' },
    inputs: [
        new Input({ name: 'en', side: Side.Left }),
        new Input({ name: 'd', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 'q', side: Side.Right }),
        new Output({ name: 'qn', pinStyle: 'inverted', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: '\\Latch-D',
    metadata: { category: 'latches', description: 'UniBo Latch-D with uppercase signals' },
    inputs: [
        new Input({ name: 'C', side: Side.Left }),
        new Input({ name: 'D', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 'Q', side: Side.Right }),
        new Output({ name: 'QN', pinStyle: 'inverted', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'LatchSR',
    metadata: { category: 'latches', description: 'Set-Reset Latch' },
    inputs: [
        new Input({ name: 's', side: Side.Left }),
        new Input({ name: 'r', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 'q', side: Side.Right }),
        new Output({ name: 'qn', pinStyle: 'inverted', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: '\\Latch-SR',
    metadata: { category: 'latches', description: 'UniBo Latch-SR with uppercase signals' },
    inputs: [
        new Input({ name: 'S', side: Side.Left }),
        new Input({ name: 'R', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 'Q', side: Side.Right }),
        new Output({ name: 'QN', pinStyle: 'inverted', side: Side.Right })
    ]
}));

// =============================================================================
// Module Definitions: Registri e Contatori
// =============================================================================

uniboLibrary.registerModule(new Module({
    name: 'Counter',
    metadata: { category: 'registers_counters', description: '7-bit Up/Down Synchronous Counter with async reset' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'en', side: Side.Left }),
        new Input({ name: 'ld', side: Side.Left }),
        new Input({ name: 'u_d', side: Side.Left }),
        new Input({ name: 'in', bits: 7, side: Side.Left }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'q', bits: 7, side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'CounterEn',
    metadata: { category: 'registers_counters', description: '7-bit Counter with enable (no reset)' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'en', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 'q', bits: 7, side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'CounterRst',
    metadata: { category: 'registers_counters', description: '7-bit Counter with reset (no enable)' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'q', bits: 7, side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'CounterEnRst',
    metadata: { category: 'registers_counters', description: '7-bit Counter with enable and async reset' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'en', side: Side.Left }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'q', bits: 7, side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'CounterEnPriorRst',
    metadata: { category: 'registers_counters', description: '7-bit Synchronous Counter with enable priority over reset' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'en', side: Side.Left }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'q', bits: 7, side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'CounterRstPriorEn',
    metadata: { category: 'registers_counters', description: '7-bit Synchronous Counter with reset priority over enable' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'en', side: Side.Left }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'q', bits: 7, side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'Register',
    metadata: { category: 'registers_counters', description: '8-bit Parallel Register with Write Enable' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'we', side: Side.Left }),
        new Input({ name: 'in', bits: 8, side: Side.Left }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'out', bits: 8, side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'ShiftRegister',
    metadata: { category: 'registers_counters', description: '8-bit Serial-In Parallel-Out Shift Register' },
    inputs: [
        new Input({ name: 'clk', pinStyle: 'clock', side: Side.Left }),
        new Input({ name: 'in', side: Side.Left }),
        new Input({ name: 'rst', side: Side.Bottom })
    ],
    outputs: [
        new Output({ name: 'out', bits: 8, side: Side.Right })
    ]
}));

// =============================================================================
// Module Definitions: Combinatori
// =============================================================================

uniboLibrary.registerModule(new Module({
    name: 'HalfAdder',
    metadata: { category: 'combinational', description: 'Single-bit Half Adder' },
    inputs: [
        new Input({ name: 'a', side: Side.Left }),
        new Input({ name: 'b', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 's', side: Side.Right }),
        new Output({ name: 'cout', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'FullAdder',
    metadata: { category: 'combinational', description: 'Single-bit Full Adder' },
    inputs: [
        new Input({ name: 'a', side: Side.Left }),
        new Input({ name: 'b', side: Side.Left }),
        new Input({ name: 'cin', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 's', side: Side.Right }),
        new Output({ name: 'cout', side: Side.Right })
    ]
}));



uniboLibrary.registerModule(new Module({
    name: "Mux2",
    metadata: { category: "combinational", description: "2-to-1 Multiplexer (composed of AND, OR, NOT)" },
    inputs: [
        new Input({ name: "d0", side: Side.Left }),
        new Input({ name: "d1", side: Side.Left }),
        new Input({ name: "sel", side: Side.Left })
    ],
    outputs: [
        new Output({ name: "y", side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'Adder',
    metadata: { category: 'combinational', description: '8-bit Ripple-Carry Adder' },
    inputs: [
        new Input({ name: 'a', bits: 8, side: Side.Left }),
        new Input({ name: 'b', bits: 8, side: Side.Left }),
        new Input({ name: 'cin', side: Side.Left })
    ],
    outputs: [
        new Output({ name: 's', bits: 8, side: Side.Right }),
        new Output({ name: 'cout', side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'Decoder',
    metadata: { category: 'combinational', description: '3-to-8 Line Decoder' },
    inputs: [
        new Input({ name: 'a', bits: 3, side: Side.Left })
    ],
    outputs: [
        new Output({ name: 'u', bits: 8, side: Side.Right })
    ]
}));

uniboLibrary.registerModule(new Module({
    name: 'ALU',
    metadata: { category: 'combinational', description: '8-bit Arithmetic Logic Unit' },
    inputs: [
        new Input({ name: 'a', bits: 8, side: Side.Left }),
        new Input({ name: 'b', bits: 8, side: Side.Left }),
        new Input({ name: 'op', bits: 3, side: Side.Left })
    ],
    outputs: [
        new Output({ name: 'y', bits: 8, side: Side.Right }),
        new Output({ name: 'flag', bits: 4, side: Side.Right })
    ]
}));

// =============================================================================
// Module Definitions: Memorie
// =============================================================================

uniboLibrary.registerModule(new Module({
    name: 'ROM',
    metadata: { category: 'memory', description: '8x8-bit Read-Only Memory' },
    inputs: [
        new Input({ name: 'addr', bits: 3, side: Side.Left })
    ],
    outputs: [
        new Output({ name: 'data', bits: 8, side: Side.Right })
    ]
}));

// Register UniBo library in global singleton registry
registry.register(uniboLibrary);

export default uniboLibrary;
