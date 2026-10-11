package com.digital.plugin.editor;

import com.intellij.openapi.application.ApplicationManager;
import com.intellij.openapi.diagnostic.Logger;
import com.intellij.openapi.editor.Document;
import com.intellij.openapi.editor.event.DocumentEvent;
import com.intellij.openapi.editor.event.DocumentListener;
import com.intellij.openapi.fileEditor.TextEditor;
import com.intellij.openapi.fileEditor.TextEditorWithPreview;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.util.Alarm;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;

public class DigitalSplitEditor extends TextEditorWithPreview {
    private static final Logger LOG = Logger.getInstance(DigitalSplitEditor.class);
    private final Alarm alarm;
    private final DigitalPreviewEditor previewEditor;

    public DigitalSplitEditor(@NotNull TextEditor editor,
                                @NotNull DigitalPreviewEditor preview) {
        super(editor, preview, "Digital Preview", Layout.SHOW_EDITOR_AND_PREVIEW);
        this.previewEditor = preview;
        this.alarm = new Alarm(Alarm.ThreadToUse.POOLED_THREAD, this);

        LOG.info("DigitalSplitEditor instantiated for file: " + (preview.getFile() != null ? preview.getFile().getPath() : "unknown"));

        // Connect manual compile callback from webview Compile button
        preview.setOnCompileRequested(this::compile);

        // Track changes without auto-compiling: typing sets dirty state
        Document document = editor.getEditor().getDocument();
        document.addDocumentListener(new DocumentListener() {
            @Override
            public void documentChanged(@NotNull DocumentEvent event) {
                previewEditor.setDirty(true);
            }
        }, this);

        // Initial render on file open
        compile();
    }

    public void compile() {
        LOG.info("DigitalSplitEditor.compile() triggered");
        previewEditor.setDirty(false);
        ApplicationManager.getApplication().invokeLater(() -> {
            String code = ApplicationManager.getApplication().runReadAction((com.intellij.openapi.util.Computable<String>) () -> {
                Document document = ((TextEditor) myEditor).getEditor().getDocument();
                return document.getText();
            });
            VirtualFile vFile = previewEditor.getFile();
            if (vFile == null) {
                vFile = getFile();
            }
            String path = vFile != null ? vFile.getPath() : null;
            LOG.info("DigitalSplitEditor.compile() extracted code length: " + (code != null ? code.length() : 0) + ", path: " + path);

            alarm.cancelAllRequests();
            alarm.addRequest(() -> {
                previewEditor.synthesizeAndRender(code, path);
            }, 10);
        });
    }

    @Override
    public @NotNull JComponent getPreferredFocusedComponent() {
        return myEditor.getPreferredFocusedComponent();
    }
}
