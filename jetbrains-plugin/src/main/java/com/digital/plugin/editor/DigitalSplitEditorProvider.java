package com.digital.plugin.editor;

import com.intellij.openapi.fileEditor.FileEditor;
import com.intellij.openapi.fileEditor.TextEditor;
import com.intellij.openapi.fileEditor.TextEditorWithPreview;
import com.intellij.openapi.fileEditor.TextEditorWithPreviewProvider;
import com.intellij.openapi.project.DumbAware;
import org.jetbrains.annotations.NotNull;

public class DigitalSplitEditorProvider extends TextEditorWithPreviewProvider implements DumbAware {
    public DigitalSplitEditorProvider() {
        super(new DigitalPreviewEditorProvider());
    }

    @Override
    protected @NotNull FileEditor createSplitEditor(@NotNull TextEditor editor, @NotNull FileEditor preview) {
        if (preview instanceof DigitalPreviewEditor) {
            return new DigitalSplitEditor(editor, (DigitalPreviewEditor) preview);
        }
        return new TextEditorWithPreview(editor, preview, "Digital Preview", TextEditorWithPreview.Layout.SHOW_EDITOR_AND_PREVIEW);
    }
}
