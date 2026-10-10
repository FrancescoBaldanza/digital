package com.digitaljs.plugin.editor;

import com.intellij.openapi.fileEditor.FileEditor;
import com.intellij.openapi.fileEditor.TextEditor;
import com.intellij.openapi.fileEditor.TextEditorWithPreview;
import com.intellij.openapi.fileEditor.TextEditorWithPreviewProvider;
import com.intellij.openapi.project.DumbAware;
import org.jetbrains.annotations.NotNull;

public class DigitalJsSplitEditorProvider extends TextEditorWithPreviewProvider implements DumbAware {
    public DigitalJsSplitEditorProvider() {
        super(new DigitalJsPreviewEditorProvider());
    }

    @Override
    protected @NotNull FileEditor createSplitEditor(@NotNull TextEditor editor, @NotNull FileEditor preview) {
        if (preview instanceof DigitalJsPreviewEditor) {
            return new DigitalJsSplitEditor(editor, (DigitalJsPreviewEditor) preview);
        }
        return new TextEditorWithPreview(editor, preview, "DigitalJS Preview", TextEditorWithPreview.Layout.SHOW_EDITOR_AND_PREVIEW);
    }
}
