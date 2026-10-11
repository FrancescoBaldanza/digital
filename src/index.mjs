"use strict";

import * as joint from '@joint/core';
import { DirectedGraph } from '@joint/layout-directed-graph';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/dialog.js';
import 'jquery-ui/themes/base/all.css';
import * as cells from './cells.mjs';
import * as engines from './engines.mjs';
import * as tools from './tools.mjs';
import * as transform from './transform.mjs';
import { HeadlessCircuit, getCellType } from './circuit.mjs';
import { BrowserSynchEngine } from './engines/browsersynch.mjs';
import { MonitorView, Monitor } from './monitor.mjs';
import { IOPanelView } from './iopanel.mjs';
import { elk_layout } from './elkjs.mjs';
import './style.css';

export { HeadlessCircuit, getCellType, cells, tools, engines, transform, MonitorView, Monitor, IOPanelView };

export const paperOptions = {
    async: true,
    sorting: joint.dia.Paper.sorting.APPROX, //needed for async paper, see https://github.com/clientIO/joint/issues/1320
    width: 100, height: 100, gridSize: 5,
    magnetThreshold: 'onleave',
    snapLinks: true,
    linkPinning: false,
    markAvailable: true,
    defaultLink: new cells.Wire,
    defaultConnectionPoint: { name: 'anchor' },
    defaultRouter: {
        name: 'metro',
        args: {
            startDirections: ['right'],
            endDirections: ['left'],
            maximumLoops: 200,
            step: 2.5
        }
    },
    defaultConnector: {
        name: 'rounded',
        args: { radius: 10 }
    },
    cellViewNamespace: cells,
    validateConnection(vs, ms, vt, mt, e, vl) {
        if (e === 'target') {
            if (!mt) return false;
            const pt = vt.model.getPort(vt.findAttribute('port', mt));
            if (typeof pt !== 'object' || pt.dir !== 'in' || pt.bits !== vl.model.get('bits'))
                return false;
            const link = this.model.getConnectedLinks(vt.model).find((l) =>
                l.id !== vl.model.id &&
                l.get('target').id === vt.model.id &&
                l.get('target').port === vt.findAttribute('port', mt)
            );
            return !link;
        } else if (e === 'source') {
            if (!ms) return false;
            const ps = vs.model.getPort(vs.findAttribute('port', ms));
            if (typeof ps !== 'object' || ps.dir !== 'out' || ps.bits !== vl.model.get('bits'))
                return false;
            return true;
        }
    }
};

const defaultSubcircuitButtons = [
    {
        id: "zoomOut",
        hidden: false,
        buttonText: "–",
        callback: ({circuit, model, paper}) => {
            const newZoom = model.get('zoomLevel') - 1;
            circuit.scaleAndRefreshPaper(paper, newZoom);
            model.set("zoomLevel", newZoom);
        }
    },
    {
        id: "zoomIn",
        hidden: false,
        buttonText: "+",
        callback: ({circuit, model, paper}) => {
            const newZoom = model.get('zoomLevel') + 1;
            circuit.scaleAndRefreshPaper(paper, newZoom);
            model.set("zoomLevel", newZoom);
        }
    }
];

export class Circuit extends HeadlessCircuit {
    constructor(data, { windowCallback = Circuit.prototype._defaultWindowCallback, layoutEngine = "elkjs", subcircuitButtons = [], ...options } = {}) {
        if (!options.engine) options.engine = BrowserSynchEngine;
        super(data, options);
        this._layoutEngine = layoutEngine
        this._windowCallback = windowCallback;
        this._subcircuitButtons = this._mergeSubcircuitButtons(subcircuitButtons);
        this.listenTo(this._engine, 'changeRunning', () => {
            this.trigger('changeRunning');
        });
    }
    _mergeSubcircuitButtons(buttons = []) {
        const res = new Map();
        for (const button of defaultSubcircuitButtons.concat(buttons)) {
            if (button?.hidden) {
                res.delete(button.id);
            } else {
                res.set(button.id, button);
            }
        }
        return Array.from(res.values());
    }
    _defaultWindowCallback(type, div, closingCallback) {
        const maxWidth = () => $(window).width() * 0.9;
        const maxHeight = () => $(window).height() * 0.9;
        function fixSize() {
            if (div.width() > maxWidth())
                div.dialog("option", "width", maxWidth());
            if (div.height() > maxHeight())
                div.dialog("option", "height", maxHeight());
        }
        const observer = new ResizeObserver(fixSize);
        if (div.get(0)) {
            observer.observe(div.get(0));
        }
        const shutdownCallback = () => { try { div.dialog('close'); } catch(_) {} };
        this.listenToOnce(this, 'shutdown', shutdownCallback);
        const dialog = div.dialog({
            width: 'auto',
            height: 'auto',
            dialogClass: 'djs-subwindow',
            modal: false,
            maxWidth: $(window).width() * 0.9,
            maxHeight: $(window).height() * 0.9,
            resizable: type !== "Memory",
            close: () => {
                this.stopListening(this, 'shutdown', shutdownCallback);
                closingCallback();
                observer.disconnect();
            }
        });

        // Customize header with module chip icon and clean title
        const titlebar = dialog.closest('.ui-dialog').find('.ui-dialog-titlebar');
        const titleSpan = titlebar.find('.ui-dialog-title');
        const currentTitle = titleSpan.text();
        if (currentTitle && !titlebar.find('.djs-module-chip-icon').length) {
            titleSpan.before(`
                <svg class="djs-module-chip-icon" viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="#dfe1e5" stroke-width="1.3" style="margin-right: 6px; flex-shrink: 0;">
                    <rect x="3" y="3" width="10" height="10" rx="1.5"></rect>
                    <line x1="1" y1="5" x2="3" y2="5"></line>
                    <line x1="1" y1="8" x2="3" y2="8"></line>
                    <line x1="1" y1="11" x2="3" y2="11"></line>
                    <line x1="13" y1="5" x2="15" y2="5"></line>
                    <line x1="13" y1="8" x2="15" y2="8"></line>
                    <line x1="13" y1="11" x2="15" y2="11"></line>
                </svg>
            `);
        }
    }
    displayOn(elem) {
        return this._makePaper(elem, this._graph);
    }
    scaleAndRefreshPaper(paper, scale) {
        paper.scale(Math.pow(1.1, scale));

        const graph = paper.model;
        paper.freeze();
        graph.resetCells(graph.getCells());
        paper.unfreeze();
    }
    _makePaper(elem, graph) {
        this._engine.observeGraph(graph);
        const opts = joint.util.merge({ el: elem, model: graph }, paperOptions);
        const paper = new joint.dia.Paper(opts);
        paper.$el.addClass('djs');
        paper.freeze();
        // required for the paper to visualize the graph (jointjs bug?)
        graph.resetCells(graph.getCells());
        // lazy graph layout
        if (!graph.get('laid_out')) {
            if (this._layoutEngine == "dagre") {
                DirectedGraph.layout(graph, {
                    nodeSep: 20,
                    edgeSep: 0,
                    rankSep: 110,
                    rankDir: "LR",
                    setPosition: (element, position) => {
                        element.setLayoutPosition({
                            x: position.x - position.width/2,
                            y: position.y - position.height/2,
                            width: position.width,
                            height: position.height
                        });
                    },
                    exportElement: (element) => {
                        return element.getLayoutSize();
                    }
                });
            } else if (this._layoutEngine == "elkjs") {
                elk_layout(graph);
            }
            graph.set('laid_out', true);
        }
        paper.listenTo(this, 'display:add', () => {
            // a very inefficient way to refresh numbase dropdowns
            // TODO: a better method
            paper.freeze();
            graph.resetCells(graph.getCells());
            paper.unfreeze();
        });
        this.listenTo(paper, 'render:done', () => {
            paper.fitToContent({ padding: 16, allowNewOrigin: 'any' });
        });
        paper.unfreeze();
        // subcircuit display
        const circuit = this;
        this.listenTo(paper, 'open:subcircuit', (model) => {
            const cellType = model.get('celltype') || 'Module';
            const label = model.get('label') || '';
            const title = `${cellType} ${label}`.trim();
            const subcircuitModal = $('<div>', {
                title: title,
                class: 'djs-subcircuit-modal'
            }).appendTo('html > body');

            // Create floating HUD tools overlay
            model.set("zoomLevel", 0);
            const buttonGroup = $('<div class="btn-group djs-subwindow-tools"></div>');
            for (const button of this._subcircuitButtons) {
                $('<button type="button" class="btn btn-secondary djs-subwindow-btn"></button>')
                    .attr('title', button.id === 'zoomIn' ? 'Zoom In' : 'Zoom Out')
                    .append($('<strong></strong>').text(button.buttonText))
                    .appendTo(buttonGroup);
            }
            buttonGroup.appendTo(subcircuitModal);

            // Container for inner paper
            const pdiv = $('<div>', { class: 'djs-subcircuit-paper-container' }).appendTo(subcircuitModal);
            const graph = model.get('graph');
            const subPaper = this._makePaper(pdiv, graph);

            subPaper.once('render:done', () => {
                this._windowCallback('Subcircuit', subcircuitModal, () => {
                    this._engine.unobserveGraph(graph);
                    subPaper.remove();
                    subcircuitModal.remove();
                });

                // Calculate optimal tight bounding box without margins
                try {
                    subPaper.fitToContent({ padding: 16, allowNewOrigin: 'any' });
                    const bbox = subPaper.getContentBBox();
                    const targetWidth = Math.min(Math.max(bbox.width + 36, 320), $(window).width() * 0.85);
                    const targetHeight = Math.min(Math.max(bbox.height + 72, 220), $(window).height() * 0.85);
                    subcircuitModal.dialog('option', {
                        width: targetWidth,
                        height: targetHeight
                    });
                    subPaper.fitToContent({ padding: 16, allowNewOrigin: 'any' });
                } catch (_) {}
            });

            // Bind button click callbacks with circuit, model and subPaper
            buttonGroup.find('.djs-subwindow-btn').each(function(idx) {
                const btnConfig = circuit._subcircuitButtons[idx];
                if (btnConfig) {
                    $(this).on('click', () => {
                        btnConfig.callback({ circuit, model, paper: subPaper });
                    });
                }
            });

            // Smooth mouse drag panning inside subcircuit modal
            let isPanning = false;
            let startClientX = 0, startClientY = 0;
            let initialOrigin = { tx: 0, ty: 0 };
            const onBlankPointerDown = (evt) => {
                isPanning = true;
                startClientX = evt.clientX;
                startClientY = evt.clientY;
                initialOrigin = subPaper.translate();
            };
            const onMouseMove = (evt) => {
                if (!isPanning) return;
                const dx = evt.clientX - startClientX;
                const dy = evt.clientY - startClientY;
                subPaper.translate(initialOrigin.tx + dx, initialOrigin.ty + dy);
            };
            const onMouseUp = () => {
                isPanning = false;
            };

            subPaper.on('blank:pointerdown', onBlankPointerDown);
            $(window).on('mousemove', onMouseMove);
            $(window).on('mouseup', onMouseUp);

            subcircuitModal.on('dialogclose', () => {
                subPaper.off('blank:pointerdown', onBlankPointerDown);
                $(window).off('mousemove', onMouseMove);
                $(window).off('mouseup', onMouseUp);
            });
        });
        this.listenTo(paper, 'open:memorycontent', (subcircuitModal, closeCallback) => {
            this._windowCallback('Memory', subcircuitModal, closeCallback);
        });
        this.listenTo(paper, 'open:fsm', (subcircuitModal, closeCallback) => {
            this._windowCallback('FSM', subcircuitModal, closeCallback);
        });
        paper.fixed = function(fixed) {
            this.setInteractivity(!fixed);
            this.$el.toggleClass('fixed', fixed);
        };
        this.trigger('new:paper', paper);
        return paper;
    }
};

if (typeof window !== 'undefined') {
    window.$ = window.$ || $;
    window.jQuery = window.jQuery || $;
    window.digital = window.digital || {};
    window.digital.Circuit = Circuit;
    window.digital.HeadlessCircuit = HeadlessCircuit;
    window.digital.cells = cells;
    window.digital.tools = tools;
    window.digital.engines = engines;
    window.digital.transform = transform;
    window.digital.paperOptions = paperOptions;

    window.digitaljs = window.digital;
}

