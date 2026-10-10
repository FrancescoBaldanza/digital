package com.digitaljs.plugin.editor;

import com.intellij.openapi.editor.Document;
import com.intellij.openapi.editor.event.DocumentEvent;
import com.intellij.openapi.editor.event.DocumentListener;
import com.intellij.openapi.fileEditor.TextEditor;
import com.intellij.openapi.fileEditor.TextEditorWithPreview;
import com.intellij.util.Alarm;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;

public class DigitalJsSplitEditor extends TextEditorWithPreview {
    private final Alarm alarm;
    private final DigitalJsPreviewEditor previewEditor;

    public DigitalJsSplitEditor(@NotNull TextEditor editor,
                                @NotNull DigitalJsPreviewEditor preview) {
        super(editor, preview, "DigitalJS Preview", Layout.SHOW_EDITOR_AND_PREVIEW);
        this.previewEditor = preview;
        this.alarm = new Alarm(Alarm.ThreadToUse.POOLED_THREAD, this);

        Document document = editor.getEditor().getDocument();
        document.addDocumentListener(new DocumentListener() {
            @Override
            public void documentChanged(@NotNull DocumentEvent event) {
                scheduleUpdate(document.getText());
            }
        }, this);

        // Initial render
        scheduleUpdate(document.getText());
    }

    private void scheduleUpdate(String code) {
        alarm.cancelAllRequests();
        alarm.addRequest(() -> {
            String path = previewEditor.getFile() != null ? previewEditor.getFile().getPath() : null;
            previewEditor.synthesizeAndRender(code, path);
        }, 350);
    }

    @Override
    public @NotNull JComponent getPreferredFocusedComponent() {
        return myEditor.getPreferredFocusedComponent();
    }
}
