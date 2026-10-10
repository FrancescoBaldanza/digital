"use strict";

import { Gate, GateView } from './base.mjs';

const and_path = "M19 0v32h16c9 0 16-7 16-16S44 0 35 0H20z";
const or_path = "M14.3 0l1.6 2s4.5 5.6 4.5 14s-4.5 14-4.5 14l-1.6 2H28c3.8 0 16.6-.5 25-16h0A28 28 0 0028 0H16.8z";
const buf_path = "M18-2v36l2-1 32-17h0L20-1z";
const xor_arc_path = "M6.8-1.2 10 2.7S14.2 8 14.2 16S10 29.3 10 29.3l-3.2 3.9H10l1.7-2.4s4.8-6 4.8-14.8c0-8.9-4.8-14.8-4.8-14.8l-1.7-2.4z";
    
const xor_arc_path_markup = {
    tagName: 'path',
    selector: 'xor_arc',
    attributes: {
        'fill': "#000",
        'd': xor_arc_path
    }
};

const neg_markup = {
    tagName: 'circle',
    className: 'body',
    selector: 'neg_bubble',
    attributes: {
        'stroke': "#000",
        'stroke-width': '2px',
        'cx': 56,
        'cy': 16,
        'r': 4
    }
};

function gateMarkup(children = []) {
    return {
        tagName: 'g',
        selector: 'body',
        children: [
            {
                tagName: 'path',
                className: 'body gate',
                selector: 'gate'
            }
        ].concat(children)
    }
}

function inPortPosition(portsArgs, elBBox) {
    const n = portsArgs.length;
    const h = elBBox.height;
    return portsArgs.map((arg, idx) => {
        if (arg.x !== undefined && arg.y !== undefined) {
            return { x: arg.x, y: arg.y };
        }
        const y = n === 1 ? h / 2 : (idx + 0.5) * (h / n);
        const u = h > 0 ? (2 * y / h - 1) : 0;
        let x = 19;
        if (arg.curve === 'or') {
            x = 14.3 + 6.1 * (1 - u * u);
        } else if (arg.curve === 'xor') {
            x = 8.5 + 5.7 * (1 - u * u);
        } else if (arg.curve === 'buf') {
            x = 18;
        } else if (arg.x !== undefined) {
            x = arg.x;
        }
        return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    });
}

function outPortPosition(portsArgs, elBBox) {
    const h = elBBox.height;
    return portsArgs.map((arg) => {
        if (arg.x !== undefined && arg.y !== undefined) {
            return { x: arg.x, y: arg.y };
        }
        const y = h / 2;
        let x = 51;
        if (arg.hasBubble) {
            x = 60;
        } else if (arg.gateType === 'or' || arg.gateType === 'xor') {
            x = 53;
        } else if (arg.gateType === 'buf') {
            x = 52;
        } else if (arg.x !== undefined) {
            x = arg.x;
        }
        return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    });
}

// base class for gates
export const GateSVG = Gate.define('GateSVG', {
    /* default properties */
    bits: 1,

    size: { width: 60, height: 32 },
    ports: {
        groups: {
            'in': {
                position: inPortPosition,
                attrs: {
                    wire: { x2: 0, display: 'none' },
                    port: { magnet: 'passive', refX: 0 }
                },
                z: -1
            },
            'out': {
                position: outPortPosition,
                attrs: {
                    wire: { x2: 0, display: 'none' },
                    port: { magnet: true, refX: 0 }
                },
                z: -1
            }
        }
    }
}, {
    markup: [gateMarkup()],
    _gateParams: Gate.prototype._gateParams.concat(['bits'])
});

// Single-input gate model
export const Gate11 = GateSVG.define('Gate11', {}, {
    initialize() {
        const bits = this.get('bits');
        const curve = this._curveType || 'buf';
        const hasBubble = Boolean(this._hasBubble);
        const gateType = this._gateShapeType || 'buf';
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits, args: { curve } },
            { id: 'out', group: 'out', dir: 'out', bits: bits, args: { hasBubble, gateType } }
        ];
        
        GateSVG.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_, bits) => {
            this._setPortsBits({ in: bits, out: bits });
        });
    }
});

// Multi-input gate model
export const GateX1 = GateSVG.define('GateX1', {
    /* default properties */
    inputs: 2,

    attrs: {
        gate: {
            'vector-effect': 'non-scaling-stroke'
        },
        xor_arc: {
            'vector-effect': 'non-scaling-stroke'
        },
        neg_bubble: {
            'vector-effect': 'non-scaling-stroke'
        }
    }
}, {
    initialize() {
        const bits = this.get('bits');
        const inputs = this.get('inputs') || 2;
        const curve = this._curveType || 'and';
        const hasBubble = Boolean(this._hasBubble);
        const gateType = this._gateShapeType || 'and';

        const ports = [];
        for (let i = 1; i <= inputs; i++)
            ports.push({ id: 'in' + i, group: 'in', dir: 'in', bits: bits, args: { curve } });
        ports.push({ id: 'out', group: 'out', dir: 'out', bits: bits, args: { hasBubble, gateType } });
        this.get('ports').items = ports;

        const h = Math.max(inputs * 16, 32);
        const sy = h / 32;
        this.set('size', { width: 60, height: h });

        GateSVG.prototype.initialize.apply(this, arguments);

        this.attr('gate/transform', 'scale(1, ' + sy + ')');
        if (curve === 'xor') {
            this.attr('xor_arc/transform', 'scale(1, ' + sy + ')');
        }
        if (hasBubble) {
            this.attr('neg_bubble/cy', h / 2);
            this.attr('neg_bubble/cx', 56);
            this.attr('neg_bubble/r', 4);
        }

        this.on('change:bits', (_, bits) => {
            const currentInputs = this.get('inputs') || 2;
            const param = { out: bits };
            for (let i = 1; i <= currentInputs; i++)
                param['in' + i] = bits;
            this._setPortsBits(param);
        });

        this.on('change:inputs', (_, newInputs) => {
            const currentBits = this.get('bits');
            const currentInputs = newInputs || 2;
            const cCurve = this._curveType || 'and';
            const cHasBubble = Boolean(this._hasBubble);
            const cGateType = this._gateShapeType || 'and';

            const newPorts = [];
            for (let i = 1; i <= currentInputs; i++)
                newPorts.push({ id: 'in' + i, group: 'in', dir: 'in', bits: currentBits, args: { curve: cCurve } });
            newPorts.push({ id: 'out', group: 'out', dir: 'out', bits: currentBits, args: { hasBubble: cHasBubble, gateType: cGateType } });

            const newH = Math.max(currentInputs * 16, 32);
            const newSy = newH / 32;
            this.set('size', { width: 60, height: newH });
            this.set('ports', { items: newPorts });

            this.attr('gate/transform', 'scale(1, ' + newSy + ')');
            if (cCurve === 'xor') {
                this.attr('xor_arc/transform', 'scale(1, ' + newSy + ')');
            }
            if (cHasBubble) {
                this.attr('neg_bubble/cy', newH / 2);
                this.attr('neg_bubble/cx', 56);
                this.attr('neg_bubble/r', 4);
            }
        });
    },
    operation(data) {
        let ret = data.in1;
        for (let i = 2; i <= this.get('inputs'); i++)
            ret = this.binoperation(ret, data['in' + i]);
        return { out: this.finoperation(ret) };
    },
    finoperation(val) {
        return val;
    },
    _gateParams: GateSVG.prototype._gateParams.concat(['inputs']),
    _unsupportedPropChanges: GateSVG.prototype._unsupportedPropChanges.concat(['inputs']),
    _operationHelpers: GateSVG.prototype._operationHelpers.concat(['binoperation', 'finoperation'])
});

// Reducing gate model
export const GateReduce = GateSVG.define('GateReduce', {}, {
    initialize() {
        const bits = this.get('bits');
        const curve = this._curveType || 'and';
        const hasBubble = Boolean(this._hasBubble);
        const gateType = this._gateShapeType || 'and';
        this.get('ports').items = [
            { id: 'in', group: 'in', dir: 'in', bits: bits, args: { curve } },
            { id: 'out', group: 'out', dir: 'out', bits: 1, args: { hasBubble, gateType } }
        ];
        
        GateSVG.prototype.initialize.apply(this, arguments);
        
        this.on('change:bits', (_, bits) => {
            this._setPortsBits({ in: bits });
        });
    }
});

// Repeater (buffer) gate model
export const Repeater = Gate11.define('Repeater', {
    attrs: { gate: { d: buf_path }}
}, {
    _curveType: 'buf',
    _hasBubble: false,
    _gateShapeType: 'buf',
    operation(data) {
        return { out: data.in };
    }
});
export const RepeaterView = GateView;

// Not gate model
export const Not = Gate11.define('Not', {
    attrs: { gate: { d: buf_path }}
}, {
    _curveType: 'buf',
    _hasBubble: true,
    _gateShapeType: 'buf',
    operation(data) {
        return { out: data.in.not() };
    },
    markup: [gateMarkup([neg_markup])],
});
export const NotView = GateView;

// Or gate model
export const Or = GateX1.define('Or', {
    attrs: { gate: { d: or_path }}
}, {
    _curveType: 'or',
    _hasBubble: false,
    _gateShapeType: 'or',
    binoperation(in1, in2) {
        return in1.or(in2);
    }
});
export const OrView = GateView;

// And gate model
export const And = GateX1.define('And', {
    attrs: { gate: { d: and_path }}
}, {
    _curveType: 'and',
    _hasBubble: false,
    _gateShapeType: 'and',
    binoperation(in1, in2) {
        return in1.and(in2);
    }
});
export const AndView = GateView;

// Nor gate model
export const Nor = GateX1.define('Nor', {
    attrs: { gate: { d: or_path }}
}, {
    _curveType: 'or',
    _hasBubble: true,
    _gateShapeType: 'or',
    binoperation(in1, in2) {
        return in1.or(in2);
    },
    finoperation(val) {
        return val.not();
    },
    markup: [gateMarkup([neg_markup])],
});
export const NorView = GateView;

// Nand gate model
export const Nand = GateX1.define('Nand', {
    attrs: { gate: { d: and_path }}
}, {
    _curveType: 'and',
    _hasBubble: true,
    _gateShapeType: 'and',
    binoperation(in1, in2) {
        return in1.and(in2);
    },
    finoperation(val) {
        return val.not();
    },
    markup: [gateMarkup([neg_markup])],
});
export const NandView = GateView;

// Xor gate model
export const Xor = GateX1.define('Xor', {
    attrs: { gate: { d: or_path }}
}, {
    _curveType: 'xor',
    _hasBubble: false,
    _gateShapeType: 'xor',
    binoperation(in1, in2) {
        return in1.xor(in2);
    },
    markup: [gateMarkup([xor_arc_path_markup])],
});
export const XorView = GateView;

// Xnor gate model
export const Xnor = GateX1.define('Xnor', {
    attrs: { gate: { d: or_path }}
}, {
    _curveType: 'xor',
    _hasBubble: true,
    _gateShapeType: 'xor',
    binoperation(in1, in2) {
        return in1.xor(in2);
    },
    finoperation(val) {
        return val.not();
    },
    markup: [gateMarkup([xor_arc_path_markup, neg_markup])],
});
export const XnorView = GateView;

// Reducing Or gate model
export const OrReduce = GateReduce.define('OrReduce', {
    attrs: { gate: { d: or_path }}
}, {
    _curveType: 'or',
    _hasBubble: false,
    _gateShapeType: 'or',
    operation(data) {
        return { out: data.in.reduceOr() };
    }
});
export const OrReduceView = GateView;

// Reducing Nor gate model
export const NorReduce = GateReduce.define('NorReduce', {
    attrs: { gate: { d: or_path }}
}, {
    _curveType: 'or',
    _hasBubble: true,
    _gateShapeType: 'or',
    operation(data) {
        return { out: data.in.reduceNor() };
    },
    markup: [gateMarkup([neg_markup])]
});
export const NorReduceView = GateView;

// Reducing And gate model
export const AndReduce = GateReduce.define('AndReduce', {
    attrs: { gate: { d: and_path }}
}, {
    _curveType: 'and',
    _hasBubble: false,
    _gateShapeType: 'and',
    operation(data) {
        return { out: data.in.reduceAnd() };
    }
});
export const AndReduceView = GateView;

// Reducing Nand gate model
export const NandReduce = GateReduce.define('NandReduce', {
    attrs: { gate: { d: and_path }}
}, {
    _curveType: 'and',
    _hasBubble: true,
    _gateShapeType: 'and',
    operation(data) {
        return { out: data.in.reduceNand() };
    },
    markup: [gateMarkup([neg_markup])],
});
export const NandReduceView = GateView;

// Reducing Xor gate model
export const XorReduce = GateReduce.define('XorReduce', {
    attrs: { gate: { d: or_path }}
}, {
    _curveType: 'xor',
    _hasBubble: false,
    _gateShapeType: 'xor',
    operation(data) {
        return { out: data.in.reduceXor() };
    },
    markup: [gateMarkup([xor_arc_path_markup])],
});
export const XorReduceView = GateView;

// Reducing Xnor gate model
export const XnorReduce = GateReduce.define('XnorReduce', {
    attrs: { gate: { d: or_path }}
}, {
    _curveType: 'xor',
    _hasBubble: true,
    _gateShapeType: 'xor',
    operation(data) {
        return { out: data.in.reduceXnor() };
    },
    markup: [gateMarkup([xor_arc_path_markup, neg_markup])],
});
export const XnorReduceView = GateView;

