"use strict";

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

describe("Task Group 2 & Task Group 3: Manual Compilation Flow, Hammer Styling & Subwindow Modernization", () => {
    const webHtmlPath = path.resolve(rootDir, 'src/web/index.html');
    const pluginHtmlPath = path.resolve(rootDir, 'jetbrains-plugin/src/main/resources/web/index.html');
    const splitEditorPath = path.resolve(rootDir, 'jetbrains-plugin/src/main/java/com/digital/plugin/editor/DigitalSplitEditor.java');
    const previewEditorPath = path.resolve(rootDir, 'jetbrains-plugin/src/main/java/com/digital/plugin/editor/DigitalPreviewEditor.java');
    const styleCssPath = path.resolve(rootDir, 'src/style.css');
    const indexMjsPath = path.resolve(rootDir, 'src/index.mjs');

    test("2.1 & 2.3: Java DigitalSplitEditor registers DocumentListener for dirty state without auto-compiling", () => {
        const javaSource = fs.readFileSync(splitEditorPath, 'utf8');
        expect(javaSource).toContain("previewEditor.setDirty(true);");
        expect(javaSource).toContain("document.addDocumentListener");
        const docChangedBlock = javaSource.match(/documentChanged\([^\)]*\)\s*\{([^}]*)\}/);
        expect(docChangedBlock).not.toBeNull();
        expect(docChangedBlock[1]).not.toContain("alarm.addRequest");
        expect(docChangedBlock[1]).not.toContain("compile()");
        expect(javaSource).toContain("compile()");
        expect(javaSource).toContain("previewEditor.setDirty(false);");
    });

    test("2.2: Compile button in src/web/index.html contains the JetBrains build hammer icon matching request", () => {
        const webHtml = fs.readFileSync(webHtmlPath, 'utf8');
        expect(webHtml).toContain('id="btn-compile"');
        expect(webHtml).toContain('class="jb-icon icon-hammer"');
        expect(webHtml).toContain('d="M3.5 1C3.63261 1 3.75975 1.05272 3.85352 1.14648L4.70703 2H5.29297L6.14648 1.14648L6.22266 1.08398C6.30419 1.02963 6.40056 1 6.5 1H10.5C13.3162 1 15 3.2657 15 5.5C15 5.67329 14.9101 5.83468 14.7627 5.92578C14.6153 6.01669 14.4312 6.02471 14.2764 5.94727L12.3818 5H10.707L10 5.70703V14.5C10 14.7761 9.77614 15 9.5 15H6.5C6.22386 15 6 14.7761 6 14.5V5.70703L5.29297 5H4.70703L3.85352 5.85352C3.75975 5.94728 3.63261 6 3.5 6H1.5C1.22386 6 1 5.77614 1 5.5V1.5C1 1.22386 1.22386 1 1.5 1H3.5ZM7 14H9V6H7V14ZM2 5H3.29297L4.14648 4.14648L4.22266 4.08398C4.30419 4.02963 4.40056 4 4.5 4H5.5C5.63261 4 5.75975 4.05272 5.85352 4.14648L6.70703 5H9.29297L10.1465 4.14648L10.2227 4.08398C10.3042 4.02963 10.4006 4 10.5 4H12.5C12.5776 4 12.6542 4.01802 12.7236 4.05273L13.8936 4.6377C13.5415 3.21018 12.324 2 10.5 2H6.70703L5.85352 2.85352C5.75975 2.94728 5.63261 3 5.5 3H4.5C4.36739 3 4.24025 2.94728 4.14648 2.85352L3.29297 2H2V5Z"');
    });

    test("2.2: Compile button in jetbrains-plugin index.html also contains the JetBrains build hammer icon", () => {
        const pluginHtml = fs.readFileSync(pluginHtmlPath, 'utf8');
        expect(pluginHtml).toContain('id="btn-compile"');
        expect(pluginHtml).toContain('class="jb-icon icon-hammer"');
        expect(pluginHtml).toContain('d="M3.5 1C3.63261 1 3.75975 1.05272 3.85352 1.14648L4.70703 2H5.29297L6.14648 1.14648L6.22266 1.08398C6.30419 1.02963 6.40056 1 6.5 1H10.5C13.3162 1 15 3.2657 15 5.5C15 5.67329 14.9101 5.83468 14.7627 5.92578C14.6153 6.01669 14.4312 6.02471 14.2764 5.94727L12.3818 5H10.707L10 5.70703V14.5C10 14.7761 9.77614 15 9.5 15H6.5C6.22386 15 6 14.7761 6 14.5V5.70703L5.29297 5H4.70703L3.85352 5.85352C3.75975 5.94728 3.63261 6 3.5 6H1.5C1.22386 6 1 5.77614 1 5.5V1.5C1 1.22386 1.22386 1 1.5 1H3.5ZM7 14H9V6H7V14ZM2 5H3.29297L4.14648 4.14648L4.22266 4.08398C4.30419 4.02963 4.40056 4 4.5 4H5.5C5.63261 4 5.75975 4.05272 5.85352 4.14648L6.70703 5H9.29297L10.1465 4.14648L10.2227 4.08398C10.3042 4.02963 10.4006 4 10.5 4H12.5C12.5776 4 12.6542 4.01802 12.7236 4.05273L13.8936 4.6377C13.5415 3.21018 12.324 2 10.5 2H6.70703L5.85352 2.85352C5.75975 2.94728 5.63261 3 5.5 3H4.5C4.36739 3 4.24025 2.94728 4.14648 2.85352L3.29297 2H2V5Z"');
    });

    test("2.3: Visual dirty badge ('Modificato') is in web editor tab bar, and plugin is preview-only (no editor or explorer)", () => {
        const webHtml = fs.readFileSync(webHtmlPath, 'utf8');
        expect(webHtml).toContain('id="editor-dirty-badge"');
        expect(webHtml).toContain('Modificato');

        const pluginHtml = fs.readFileSync(pluginHtmlPath, 'utf8');
        // Plugin must NOT have sidebar explorer or editor column
        expect(pluginHtml).not.toContain('id="sidebar-explorer"');
        expect(pluginHtml).not.toContain('id="editor-column"');
        expect(pluginHtml).not.toContain('id="verilog-editor"');
        // Plugin must only have circuit column taking full width
        expect(pluginHtml).toContain('id="circuit-column"');
    });

    test("3.1 & 3.2: Modern subwindow card CSS styles in style.css", () => {
        const css = fs.readFileSync(styleCssPath, 'utf8');
        expect(css).toContain('.ui-dialog');
        expect(css).toContain('border-radius: 8px !important;');
        expect(css).toContain('.ui-dialog .ui-dialog-titlebar');
        expect(css).toContain('.ui-dialog .ui-dialog-titlebar-close');
        expect(css).toContain('.djs-subwindow-tools');
        expect(css).toContain('.djs-subwindow-btn');
    });

    test("3.3 & 3.4: Subwindow tight bounding box, non-modal and HUD buttons in src/index.mjs", () => {
        const indexMjs = fs.readFileSync(indexMjsPath, 'utf8');
        expect(indexMjs).toContain('djs-subwindow-tools');
        expect(indexMjs).toContain('fitToContent({ padding: 16');
        expect(indexMjs).toContain('modal: false');
        expect(indexMjs).toContain('window.digital');
        expect(indexMjs).toContain('window.$');
    });
});
