package com.digital.plugin.editor;

import com.intellij.openapi.diagnostic.Logger;
import com.intellij.openapi.fileEditor.FileEditor;
import com.intellij.openapi.fileEditor.TextEditor;
import com.intellij.openapi.fileEditor.TextEditorWithPreview;
import com.intellij.openapi.fileEditor.TextEditorWithPreviewProvider;
import com.intellij.openapi.project.DumbAware;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;

public class DigitalSplitEditorProvider extends TextEditorWithPreviewProvider implements DumbAware {
    private static final Logger LOG = Logger.getInstance(DigitalSplitEditorProvider.class);

    public DigitalSplitEditorProvider() {
        super(new DigitalPreviewEditorProvider());
        LOG.info("DigitalSplitEditorProvider initialized");
    }

    @Override
    public boolean accept(@NotNull Project project, @NotNull VirtualFile file) {
        boolean accepted = super.accept(project, file);
        LOG.info("DigitalSplitEditorProvider.accept(" + file.getName() + ") = " + accepted);
        return accepted;
    }

    @Override
    protected @NotNull FileEditor createSplitEditor(@NotNull TextEditor editor, @NotNull FileEditor preview) {
        LOG.info("DigitalSplitEditorProvider.createSplitEditor called for " + editor.getFile().getName());
        if (preview instanceof DigitalPreviewEditor) {
            return new DigitalSplitEditor(editor, (DigitalPreviewEditor) preview);
        }
        return new TextEditorWithPreview(editor, preview, "Digital Preview", TextEditorWithPreview.Layout.SHOW_EDITOR_AND_PREVIEW);
    }
}
