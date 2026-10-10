"use strict";

import * as joint from '@joint/core';
import { Box, BoxView } from './base.mjs';
import { IO, Input, Output } from './io.mjs';

// add offset of 10pt to account for the top label at layout time
const subcircuit_pos_offset = 0;
const subcircuit_size_offset = 0;

// Subcircuit model -- embeds a circuit graph in an element
export const Subcircuit = Box.define('Subcircuit', {
    /* default properties */
    propagation: 0,
    warning: false,

    attrs: {
        wrapper: {
            refWidth: 1, refHeight: 1,
            stroke: 'red', strokeWidth: 10
        },
        label: {
            refX: .5, refY: .5,
            textAnchor: 'middle', textVerticalAnchor: 'middle',
            fontSize: '9.5pt',
            fontWeight: '600',
            fill: '#dfe1e5'
        }
    }
}, {
    initialize() {
        const cleanName = (name) => {
            if (!name) return '';
            return name.startsWith('\\') ? name.slice(1) : name;
        };

        const rawLabel = this.get('label');
        const rawCelltype = this.get('celltype');
        const displayName = cleanName(rawLabel) || cleanName(rawCelltype);

        this.attr('label/text', displayName);
        this.on('change:label', (_, val) => {
            this.attr('label/text', cleanName(val) || cleanName(this.get('celltype')));
        });

        const graph = this.get('graph');
        console.assert(graph instanceof joint.dia.Graph);
        graph.set('subcircuit', this);
        const IOs = graph.getCells()
            .filter((cell) => cell instanceof IO);
        const inputs = IOs.filter((cell) => cell instanceof Input);
        const outputs = IOs.filter((cell) => cell instanceof Output);
        function sortfun(x, y) {
            if (x.has('order') || y.has('order'))
                return x.get('order') - y.get('order');
            return x.get('net').localeCompare(y.get('net'));
        }
        inputs.sort(sortfun);
        outputs.sort(sortfun);
        const vcount = Math.max(inputs.length, outputs.length);

        const inMaxLen = inputs.length > 0 ? Math.max(...inputs.map(io => (io.get('net') || '').length)) : 0;
        const outMaxLen = outputs.length > 0 ? Math.max(...outputs.map(io => (io.get('net') || '').length)) : 0;
        const maxSideLen = Math.max(inMaxLen, outMaxLen);
        const maxSidePx = maxSideLen * 7.5;
        const centerTextPx = Math.max(displayName.length * 8, 30);
        const margin = 20; // 20px margin on each side of the instance label
        const calculatedWidth = Math.max(Math.ceil(2 * maxSidePx + centerTextPx + 2 * (8 + margin)), 80);
        const calculatedHeight = Math.max(vcount * 16 + 12, 36);

        const size = { width: calculatedWidth, height: calculatedHeight };
        const ports = [], iomap = {};
        for (const [num, io] of inputs.entries()) {
            ports.push({ id: io.get('net'), group: 'in', dir: 'in', bits: io.get('bits'), labelled: true });
        }
        for (const [num, io] of outputs.entries()) {
            ports.push({ id: io.get('net'), group: 'out', dir: 'out', bits: io.get('bits'), labelled: true });
        }
        for (const io of IOs) {
            iomap[io.get('net')] = io.get('id');
        }
        this.set('size', size);
        this.set('circuitIOmap', iomap);
        this.get('ports').items = ports;
        this.set('warning', graph._warnings > 0);

        Box.prototype.initialize.apply(this, arguments);
    },
    _resetPortValue(port) {
        const iomap = this.get('circuitIOmap');
        const graph = this.get('graph');
        if (port.dir == 'in')
            return graph.getCell(iomap[port.id]).get('outputSignals').out;
        if (port.dir == 'out')
            return graph.getCell(iomap[port.id]).get('inputSignals').in;
        return Box.prototype._resetPortValue.call(this, port);
    },
    getLayoutSize() {
        const size = this.size();
        size.height += subcircuit_size_offset;
        return size;
    },
    setLayoutPosition(position) {
        this.set('position', {
            x: position.x,
            y: position.y + subcircuit_pos_offset
        });
    },
    getPortsPositions() {
        const positions = Box.prototype.getPortsPositions.apply(this, arguments);
        const res = {};
        for (const id in positions) {
            res[id] = { ...positions[id] };
            res[id].y = res[id].y + subcircuit_pos_offset;
        }
        return res;
    },
    markup: [{
            tagName: 'rect',
            selector: 'wrapper'
        }, {
            tagName: 'rect',
            className: 'body',
            selector: 'body'
        }, {
            tagName: 'text',
            className: 'label',
            selector: 'label'
        }
    ].concat(Box.prototype.markupZoom),
    _gateParams: Box.prototype._gateParams.concat(['celltype']),
    _unsupportedPropChanges: Box.prototype._unsupportedPropChanges.concat(['celltype'])
});

export const SubcircuitView = BoxView.extend({
    attrs: joint.util.merge({}, BoxView.prototype.attrs, {
        warning: {
            warn: { wrapper: { 'stroke-opacity': '0.5' } },
            none: { wrapper: { 'stroke-opacity': '0' } }
        }
    }),
    _autoResizeBox: true,
    presentationAttributes: BoxView.addPresentationAttributes({
        warning: 'WARNING'
    }),
    confirmUpdate(flags) {
        BoxView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'WARNING')) {
            this._updateWarning();
        }
    },
    _updateWarning() {
        const warning = this.model.get('warning');
        const attrs = this.attrs.warning[
            warning ? 'warn' : 'none'
        ];
        this._applyAttrs(attrs);
    },
    update() {
        BoxView.prototype.update.apply(this, arguments);
        this._updateWarning();
    },
    events: {
        "click foreignObject.tooltip": "stopprop",
        "mousedown foreignObject.tooltip": "stopprop",
        "touchstart foreignObject.tooltip": "stopprop", // make sure the input receives focus
        "click a.zoom": "zoomInCircuit"
    },
    zoomInCircuit(evt) {
        evt.stopPropagation();
        this.paper.trigger('open:subcircuit', this.model);
        return false;
    }
});

// Generic Rectangular Module (Generic Box) alias for Subcircuit
export const GenericBox = Subcircuit;
export const GenericBoxView = SubcircuitView;

