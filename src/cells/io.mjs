"use strict";

import * as joint from '@joint/core';
import { Box, BoxView } from './base.mjs';
import $ from 'jquery';
import { Vector3vl } from '3vl';

// Things with numbers
export const NumBase = Box.define('NumBase', {
    /* default properties */
    numbase: 'hex',
    bits: 1
}, {
    initialize() {
        Box.prototype.initialize.apply(this, arguments);

        this.on('change:bits', (_, bits) => {
            const display3vl = this.graph._display3vl;
            const displays = display3vl.usableDisplays(this.numbaseType, this.get('bits'));
            if (!displays.includes(this.get('numbase')))
                this.set('numbase', 'hex');
        });
    },
    tooltipMinWidth: 70,
    markupTooltip: [{
        tagName: 'foreignObject',
        className: 'tooltip',
        selector: 'tooltip',
        children: [{
            tagName: 'body',
            namespaceURI: 'http://www.w3.org/1999/xhtml',
            children: [{
                tagName: 'select',
                className: 'numbase'
            }]
        }]
    }],
    _gateParams: Box.prototype._gateParams.concat(['numbase'])
});
export const NumBaseView = BoxView.extend({
    presentationAttributes: BoxView.addPresentationAttributes({
        bits: 'BITS',
        numbase: 'NUMBASE'
    }),
    _autoResizeBox: true,
    events: {
        "click select.numbase": "stopprop",
        "mousedown select.numbase": "stopprop", // Prevent drag
        "touchstart select.numbase": "stopprop", // Prevent drag & make sure select works
        "change select.numbase": "_changeNumbase"
    },
    _changeNumbase(evt) {
        this.model.set('numbase', evt.target.value || 'bin');
    },
    _calculateBoxWidth() {
        const testtext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        $(testtext).text(Array(this.model.get('bits')).fill('0').join(''))
            .attr('class', 'numvalue')
            .appendTo(this.$el);
        const width = testtext.getBBox().width + 20;
        testtext.remove();
        return width;
    },
    confirmUpdate(flags) {
        BoxView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'BITS') || this.hasFlag(flags, 'RENDER'))
            this._makeNumBaseSelector();
        if (this.hasFlag(flags, 'NUMBASE'))
            this._updateNumBaseSelector();
    },
    _makeNumBaseSelector() {
        this.$('select.numbase').empty();
        const numbase = this.model.get('numbase');
        const display3vl = this.model.graph._display3vl;
        for (const base of display3vl.usableDisplays(this.model.numbaseType, this.model.get('bits'))) {
            const opt = $('<option>')
                .attr('value', base)
                .prop('selected', base == numbase)
                .text(base)
                .appendTo(this.$('select.numbase'));
        }
    },
    _updateNumBaseSelector() {
        this.$('select.numbase').val(this.model.get('numbase'));
    }
});

// Input/output model
export const IO = NumBase.define('IO', {
    /* default properties */
    bits: 1,
    net: '',
    //as I/O has no delay, this is even not taken into account at all
    propagation: 0,
    /* 0 - within subcircuit, 1 - single-line, 2 - bus-line */
    mode: -1,

    attrs: {
        ioname: {
            refX: .5, refY: .5,
            textAnchor: 'middle', textVerticalAnchor: 'middle',
            fontWeight: '600',
            fontSize: '9pt',
            fill: '#dfe1e5'
        }
    }
}, {
    initialize() {
        const bits = this.get('bits');
        this.get('ports').items = [
            { id: this._portDirection, group: this._portDirection, dir: this._portDirection, bits: bits }
        ];

        NumBase.prototype.initialize.apply(this, arguments);

        this.on('change:bits', (_, bits) => {
            const b = {};
            b[this._portDirection] = bits;
            this._setPortsBits(b);
            if (this.get('mode') != 0) this._checkMode();
        });
        this.bindAttrToProp('ioname/text', 'net');
    },
    onAdd() {
        this._checkMode();
    },
    _checkMode() {
        // assumes graph to have subcircuit property before adding elements
        const withinSubcircuit = this.graph && this.graph.has('subcircuit');
        const bits = this.get('bits');
        const mode = withinSubcircuit ? 0 : bits == 1 ? 1 : 2;

        this.set('mode', mode);
        this.set('box_resized', false);
        if (mode == 1) {
            const labelProp = this.get('label') || this.get('net');
            if (labelProp && typeof labelProp === 'string' && labelProp.trim().length > 0) {
                const estWidth = Math.max(34, Math.ceil(labelProp.length * 8.5 + 28));
                this.prop('size/width', estWidth);
            }
        }
        this.set('markup', mode == 0 ? this.markupInSubcircuit :
            mode == 1 ? this.markupSingle : this.markupBus
        );
        return mode;
    },
    getLayoutSize() {
        const size = this.size();
        if (this.get('mode') == 1) {
            const labelProp = this.get('label') || this.get('net');
            if (labelProp && typeof labelProp === 'string' && labelProp.trim().length > 0) {
                const estWidth = Math.max(size.width, Math.ceil(labelProp.length * 8.5 + 28));
                return { width: estWidth, height: size.height };
            }
        }
        return size;
    },
    _setPortsBits(portsBits) {
        NumBase.prototype._setPortsBits.apply(this, arguments);

        if (this.get('mode') != 0) return; // not inside a subcircuit
        const subcir = this.graph.get('subcircuit');
        console.assert(subcir != null);
        const portsBitsSubcir = {};
        portsBitsSubcir[this.get('net')] = portsBits[this._portDirection];
        subcir._setPortsBits(portsBitsSubcir);
    },
    markupSingle: NumBase.prototype.markup,
    markupBus: NumBase.prototype.markup.concat(NumBase.prototype.markupTooltip),
    markupInSubcircuit: NumBase.prototype.markup.concat([{
            tagName: 'text',
            className: 'ioname',
            selector: 'ioname'
        }
    ]),
    _gateParams: NumBase.prototype._gateParams.concat(['bits','net','order'])
});
export const IOView = NumBaseView.extend({
    _calculateBoxWidth() {
        switch (this.model.get('mode')) {
            case 0: {
                // resize based on io name
                const text = this.selectors['ioname'] || this.el.querySelector('text.ioname');
                if (text && text.getAttribute('display') !== 'none') {
                    try {
                        const bbox = text.getBBox();
                        if (bbox && bbox.width > 0) return Math.ceil(bbox.width + 16);
                    } catch (e) {}
                }
                return 20;
            }
            case 1: {
                // Single-bit I/O (Button, Lamp)
                // Resize to fit the centered text label with margin
                const label = this.el.querySelector('text.label');
                if (label && label.textContent && label.textContent.trim().length > 0) {
                    try {
                        const bbox = label.getBBox();
                        if (bbox && bbox.width > 0) {
                            return Math.max(34, Math.ceil(bbox.width + 28));
                        }
                    } catch (e) {}
                }
                const labelProp = this.model.get('label') || this.model.get('net');
                if (labelProp && typeof labelProp === 'string' && labelProp.trim().length > 0) {
                    return Math.max(34, Math.ceil(labelProp.length * 8.5 + 28));
                }
                return 34;
            }
            case 2:
                // resize based on binary string
                return NumBaseView.prototype._calculateBoxWidth.call(this);
        }
    }
});

// Input model
export const Input = IO.define('Input', {
    attrs: {
        '.': { cursor: 'pointer' },
        body: { cursor: 'pointer' },
        btnface: {
            stroke: '#565961', strokeWidth: 1.5, rx: 6, ry: 6,
            refX: 3, refY: 3,
            refWidth: -6, refHeight: -6,
            cursor: 'pointer'
        },
        label: {
            cursor: 'pointer',
            pointerEvents: 'none'
        },
        valinput: {
            refX: .5, refY: .5,
            refWidth: -10, refHeight: -10,
            xAlignment: 'middle', yAlignment: 'middle',
        }
    }
}, {
    isInput: true,
    _portDirection: 'out',
    _resetPortValue(port) {
        if (port.id == "out" && port.dir == "out") {
            const bits = this.get('bits');
            const mode = this.get('mode');
            return mode == 1 ? Vector3vl.zeros(bits) : Vector3vl.xes(bits);
        } else return IO.prototype._resetPortValue.call(this, port);
    },
    _checkMode() {
        IO.prototype._checkMode.call(this);
        this._resetPortsSignals([this.get('ports').items[0]]);
    },
    setInput(sig) {
        this._setInput(sig);
        this.trigger('userChange', this);
    },
    toggleInput() {
        this.setInput(this.get('outputSignals').out.not());
    },
    _setInput(sig) {
        if (sig.bits != this.get('bits'))
            throw new Error("setInput: wrong number of bits");
        this.set('outputSignals', { out: sig });
    },
    markupSingle: [{
            tagName: 'rect',
            className: 'body',
            selector: 'body'
        }, {
            tagName: 'rect',
            className: 'btnface',
            selector: 'btnface'
        }, {
            tagName: 'text',
            className: 'label',
            selector: 'label'
        }
    ],
    markupBus: IO.prototype.markupBus.concat([{
            tagName: 'foreignObject',
            className: 'valinput',
            selector: 'valinput',
            children: [{
                tagName: 'body',
                namespaceURI: 'http://www.w3.org/1999/xhtml',
                children: [{
                    tagName: 'input',
                    attributes: { type: 'text' }
                }]
            }]
        }
    ]),
    numbaseType: 'read'
});
export const InputView = IOView.extend({
    attrs: joint.util.merge({
        button: {
            high: {
                body: { 'fill': '#1b4382', 'stroke': '#3574f0', 'stroke-width': '2px', 'filter': 'drop-shadow(0 0 10px rgba(53, 116, 240, 0.7))' },
                btnface: { 'fill': '#265cb8', 'stroke': '#5799f7' },
                label: { 'fill': '#ffffff', 'font-weight': 'bold' }
            },
            low: {
                body: { 'fill': '#2b2d30', 'stroke': '#43454a', 'stroke-width': '1.5px', 'filter': 'none' },
                btnface: { 'fill': '#393b40', 'stroke': '#565961' },
                label: { 'fill': '#dfe1e5', 'font-weight': '600' }
            }
        }
    }, IOView.prototype.attrs),
    confirmUpdate(flags) {
        IOView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'SIGNAL2') ||
            this.hasFlag(flags, 'NUMBASE')) this._updateView();
    },
    _updateView() {
        switch (this.model.get('mode')) {
            case 1: this._updateButton(); break;
            case 2: this._updateNumEntry(); break;
        }
    },
    _updateButton() {
        const signal = this.model.get('outputSignals').out;
        const attrs = this.attrs.button[
            signal.isHigh ? 'high' : 'low'
        ];
        this._applyAttrs(attrs);
    },
    _updateNumEntry() {
        const display3vl = this.model.graph._display3vl;
        this.$('input').val(display3vl.show(this.model.get('numbase'), this.model.get('outputSignals').out));
        this.$('input').removeClass('invalid');
    },
    render() {
        IOView.prototype.render.apply(this, arguments);
        this._updateView();
    },
    events: joint.util.merge({
        //button: clicking anywhere on the input element toggles it
        "click": "_onButtonClick",
        "mousedown": "_onButtonMouseDown",
        "touchstart": "_onButtonTouchStart",
        //numEntry
        "click input": "stopprop",
        "mousedown input": "stopprop", // Prevent drag
        "touchstart input": "stopprop", // Prevent drag & make sure the input receives focus
        "change input": "_onNumEntry"
    }, NumBaseView.prototype.events),
    _onButtonClick(evt) {
        if (this.model.get('mode') === 1) {
            if (evt.target && evt.target.classList && evt.target.classList.contains('port')) return;
            evt.stopPropagation();
            this.model.toggleInput();
        }
    },
    _onButtonMouseDown(evt) {
        if (this.model.get('mode') === 1) {
            if (evt.target && evt.target.classList && evt.target.classList.contains('port')) return;
            evt.stopPropagation();
        }
    },
    _onButtonTouchStart(evt) {
        if (this.model.get('mode') === 1) {
            if (evt.target && evt.target.classList && evt.target.classList.contains('port')) return;
            evt.stopPropagation();
            this.model.toggleInput();
        }
    },
    _onNumEntry(evt) {
        const numbase = this.model.get('numbase');
        const bits = this.model.get('bits');
        const display3vl = this.model.graph._display3vl;
        if (display3vl.validate(numbase, evt.target.value, bits)) {
            const val = display3vl.read(numbase, evt.target.value, bits);
            this.model.setInput(val);
        } else {
            this.$('input').addClass('invalid');
        }
    }
});

// legacy special input models, extending Input
export const Button = Input.define('Button');
export const ButtonView = InputView;
export const NumEntry = Input.define('NumEntry');
export const NumEntryView = InputView;

// Output model
export const Output = IO.define('Output', {
    attrs: {
        led: {
            display: 'none'
        },
        label: {
            pointerEvents: 'none'
        },
        value: {
            refX: .5, refY: .5,
            textVerticalAnchor: 'middle',
            text: '0'
        }
    }
}, {
    isOutput: true,
    _portDirection: 'in',
    getOutput() {
        return this.get('inputSignals').in;
    },
    markupSingle: [{
            tagName: 'rect',
            className: 'body',
            selector: 'body'
        }, {
            tagName: 'text',
            className: 'label',
            selector: 'label'
        }
    ],
    markupBus: IO.prototype.markupBus.concat([{
            tagName: 'text',
            className: 'value numvalue',
            selector: 'value'
        }
    ]),
    numbaseType: 'show'
});
export const OutputView = IOView.extend({
    attrs: joint.util.merge({
        lamp: {
            high: {
                body: { 'fill': '#245930', 'stroke': '#59a869', 'stroke-width': '2px', 'filter': 'drop-shadow(0 0 10px rgba(89, 168, 105, 0.7))' },
                label: { 'fill': '#ffffff', 'font-weight': 'bold' }
            },
            low: {
                body: { 'fill': '#2b2d30', 'stroke': '#43454a', 'stroke-width': '1.5px', 'filter': 'none' },
                label: { 'fill': '#bcbec4', 'font-weight': '600' }
            },
            undef: {
                body: { 'fill': '#42331c', 'stroke': '#e5a84b', 'stroke-width': '1.5px', 'filter': 'none' },
                label: { 'fill': '#e5a84b', 'font-weight': '600' }
            }
        }
    }, IOView.prototype.attrs),
    confirmUpdate(flags) {
        IOView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'SIGNAL') ||
            this.hasFlag(flags, 'NUMBASE')) this._updateView();
    },
    _updateView() {
        switch (this.model.get('mode')) {
            case 1: this._updateLamp(); break;
            case 2: this._updateNumDisplay(); break;
        }
    },
    _updateLamp() {
        const signal = this.model.get('inputSignals').in;
        const attrs = this.attrs.lamp[
            signal.isHigh ? 'high' :
            signal.isLow ? 'low' : 'undef'
        ];
        this._applyAttrs(attrs);
    },
    _updateNumDisplay() {
        const display3vl = this.model.graph._display3vl;
        this.$('text.value tspan').text(display3vl.show(this.model.get('numbase'), this.model.get('inputSignals').in));
    },
    render() {
        IOView.prototype.render.apply(this, arguments);
        this._updateView();
    }
});

// legacy special output models, extending Output
export const Lamp = Output.define('Lamp');
export const LampView = OutputView;

export const NumDisplay = Output.define('NumDisplay');
export const NumDisplayView = OutputView;

// Constant
export const Constant = NumBase.define('Constant', {
    /* default properties */
    constant: '0',
    propagation: 0,

    attrs: {
        value: {
            refX: .5, refY: .5,
            textVerticalAnchor: 'middle',
            text: '0'
        }
    }
}, {
    initialize() {
        const constant = this.get('constant');
        const bits = constant.length;
        this.set('bits', bits);
        this.get('ports').items = [
            { id: 'out', group: 'out', dir: 'out', bits: bits }
        ];
        
        NumBase.prototype.initialize.apply(this, arguments);
       
        this.on('change:constant', (_, constant) => {
            const bits = constant.length;
            this._setPortsBits({ out: bits });
            this.set('bits', bits);
            this.set('constantCache', Vector3vl.fromBin(constant, bits));
        });
    },
    prepare() {
        const constant = this.get('constant');
        const bits = constant.length;
        this.set('constantCache', Vector3vl.fromBin(constant, bits));
    },
    operation() {
        return { out: this.get('constantCache') };
    },
    markup: NumBase.prototype.markup.concat([{
            tagName: 'text',
            className: 'value numvalue',
            selector: 'value'
        }
    ]),
    _gateParams: NumBase.prototype._gateParams.concat(['constant']),
    numbaseType: 'show'
});
export const ConstantView = NumBaseView.extend({
    presentationAttributes: NumBaseView.addPresentationAttributes({
        constantCache: 'CONSTANT'
    }),
    confirmUpdate(flags) {
        NumBaseView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'CONSTANT') ||
            this.hasFlag(flags, 'NUMBASE')) this._showText();
    },
    _showText() {
        const display3vl = this.model.graph._display3vl;
        this.$('text.value tspan').text(display3vl.show(this.model.get('numbase'), this.model.get('constantCache')));
    },
    update() {
        NumBaseView.prototype.update.apply(this, arguments);
        this._showText();
    }
});

// Clock
export const Clock = Box.define('Clock', {
    /* default properties */
    propagation: 100,

    ports: {
        items: [
            { id: 'out', group: 'out', dir: 'out', bits: 1 }
        ]
    },

    size: { width: 34, height: 34 },
    attrs: {
        label: { display: 'none' }
    }
}, {
    _resetPortValue(port) {
        if (port.id == "out" && port.dir == "out") {
            return Vector3vl.zero;
        } else return Box.prototype._resetPortValue(port);
    },
    operation() {
        // trigger next clock edge
        return { out: this.get('outputSignals').out.not(), _clock_hack: true };
    },
    getLayoutSize() {
        return this.size();
    },
    tooltipMinWidth: 55,
    markup: [{
            tagName: 'rect',
            className: 'body',
            selector: 'body'
        }, {
            tagName: 'path',
            className: 'decor',
            attributes: { d: 'M7 9 L7 25 L15 25 L15 9 L23 9 L23 25', stroke: '#3574f0', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
        }, {
            tagName: 'foreignObject',
            className: 'tooltip',
            selector: 'tooltip',
            children: [{
                tagName: 'body',
                namespaceURI: 'http://www.w3.org/1999/xhtml',
                children: [{
                    tagName: 'input',
                    attributes: { type: 'number', min: 1, step: 1 }
                }]
            }]
        }
    ],
    _unsupportedPropChanges: Box.prototype._unsupportedPropChanges.concat(['bits'])
});
export const ClockView = BoxView.extend({
    _autoResizeBox: false,
    _calculateBoxWidth() {
        return 34;
    },
    presentationAttributes: BoxView.addPresentationAttributes({
        propagation: 'SIGNAL'
    }),
    events: {
        "click input": "stopprop",
        "mousedown input": "stopprop",
        "touchstart input": "stopprop", // make sure the input receives focus
        "change input": "_changePropagation",
        "input input": "_changePropagation"
    },
    render(args) {
        BoxView.prototype.render.apply(this, arguments);
        this.updatePropagation();
    },
    confirmUpdate(flags) {
        BoxView.prototype.confirmUpdate.apply(this, arguments);
        if (this.hasFlag(flags, 'SIGNAL')) this.updatePropagation();
    },
    _changePropagation(evt) {
        const val = evt.target.value;
        const valid = String(val) == String(Number(val));
        if (valid) this.model.set('propagation', Number(val) || 1);
        this.$('input').toggleClass('invalid', !valid);
    },
    updatePropagation() {
        this.$('input').val(this.model.get('propagation'));
    }
});

