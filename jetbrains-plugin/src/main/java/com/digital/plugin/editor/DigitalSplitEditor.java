package com.digital.plugin.editor;

import com.intellij.openapi.editor.Document;
import com.intellij.openapi.editor.event.DocumentEvent;
import com.intellij.openapi.editor.event.DocumentListener;
import com.intellij.openapi.fileEditor.TextEditor;
import com.intellij.openapi.fileEditor.TextEditorWithPreview;
import com.intellij.util.Alarm;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;

public class DigitalSplitEditor extends TextEditorWithPreview {
    private final Alarm alarm;
    private final DigitalPreviewEditor previewEditor;

    public DigitalSplitEditor(@NotNull TextEditor editor,
                                @NotNull DigitalPreviewEditor preview) {
        super(editor, preview, "Digital Preview", Layout.SHOW_EDITOR_AND_PREVIEW);
        this.previewEditor = preview;
        this.alarm = new Alarm(Alarm.ThreadToUse.POOLED_THREAD, this);

        // Connect manual compile callback from webview Compile button
        preview.setOnCompileRequested(this::compile);

        // Initial render on file open
        compile();
    }

    public void compile() {
        alarm.cancelAllRequests();
        alarm.addRequest(() -> {
            Document document = ((TextEditor) myEditor).getEditor().getDocument();
            String code = document.getText();
            String path = previewEditor.getFile() != null ? previewEditor.getFile().getPath() : null;
            previewEditor.synthesizeAndRender(code, path);
        }, 10);
    }

    @Override
    public @NotNull JComponent getPreferredFocusedComponent() {
        return myEditor.getPreferredFocusedComponent();
    }
}
