package com.digital.plugin.editor;

import com.intellij.openapi.fileEditor.FileEditor;
import com.intellij.openapi.fileEditor.FileEditorPolicy;
import com.intellij.openapi.fileEditor.FileEditorProvider;
import com.intellij.openapi.project.DumbAware;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.vfs.VirtualFile;
import org.jetbrains.annotations.NotNull;

public class DigitalPreviewEditorProvider implements FileEditorProvider, DumbAware {
    public static final String EDITOR_TYPE_ID = "digitaljs-preview-editor";

    @Override
    public boolean accept(@NotNull Project project, @NotNull VirtualFile file) {
        String ext = file.getExtension();
        return ext != null && (ext.equalsIgnoreCase("v") || ext.equalsIgnoreCase("sv"));
    }

    @Override
    public @NotNull FileEditor createEditor(@NotNull Project project, @NotNull VirtualFile file) {
        return new DigitalPreviewEditor(project, file);
    }

    @Override
    public @NotNull String getEditorTypeId() {
        return EDITOR_TYPE_ID;
    }

    @Override
    public @NotNull FileEditorPolicy getPolicy() {
        return FileEditorPolicy.HIDE_DEFAULT_EDITOR;
    }
}
