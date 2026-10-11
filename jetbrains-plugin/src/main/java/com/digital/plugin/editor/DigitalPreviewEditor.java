package com.digital.plugin.editor;

import com.digital.plugin.synthesis.DigitalSynthesizer;
import com.digital.plugin.util.WebResourcesManager;
import com.intellij.openapi.application.ApplicationManager;
import com.intellij.openapi.fileEditor.FileEditor;
import com.intellij.openapi.fileEditor.FileEditorLocation;
import com.intellij.openapi.fileEditor.FileEditorState;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.Disposer;
import com.intellij.openapi.util.UserDataHolderBase;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.ui.jcef.JBCefBrowser;
import com.intellij.ui.jcef.JBCefBrowserBase;
import com.intellij.ui.jcef.JBCefJSQuery;
import org.cef.browser.CefBrowser;
import org.cef.browser.CefFrame;
import org.cef.handler.CefLoadHandlerAdapter;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.*;
import java.awt.*;
import java.beans.PropertyChangeListener;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.util.Base64;

public class DigitalPreviewEditor extends UserDataHolderBase implements FileEditor {
    private final Project project;
    private final VirtualFile file;
    private final JPanel mainPanel;
    private final JBCefBrowser browser;
    private volatile boolean isPageLoaded = false;
    private volatile String pendingBase64Circuit = null;
    private volatile String pendingBase64Error = null;
    private Runnable onCompileRequested = null;
    private JBCefJSQuery compileQuery = null;

    public void setOnCompileRequested(Runnable onCompileRequested) {
        this.onCompileRequested = onCompileRequested;
    }

    public DigitalPreviewEditor(@NotNull Project project, @NotNull VirtualFile file) {
        this.project = project;
        this.file = file;

        this.browser = new JBCefBrowser();
        this.mainPanel = new JPanel(new BorderLayout());
        this.mainPanel.setFocusable(true);
        this.mainPanel.add(browser.getComponent(), BorderLayout.CENTER);

        compileQuery = JBCefJSQuery.create((JBCefBrowserBase) browser);
        compileQuery.addHandler(request -> {
            if ("compile".equals(request)) {
                if (onCompileRequested != null) {
                    ApplicationManager.getApplication().invokeLater(onCompileRequested);
                }
            }
            return new JBCefJSQuery.Response("ok");
        });

        browser.getJBCefClient().addLoadHandler(new CefLoadHandlerAdapter() {
            @Override
            public void onLoadEnd(CefBrowser b, CefFrame frame, int httpStatusCode) {
                isPageLoaded = true;
                executeJs("window.triggerCompileNative = function() { " + compileQuery.inject("\"compile\"") + " };");
                if (pendingBase64Circuit != null) {
                    executeJs("window.loadCircuitFromBase64('" + pendingBase64Circuit + "');");
                    pendingBase64Circuit = null;
                } else if (pendingBase64Error != null) {
                    executeJs("window.showErrorFromBase64('" + pendingBase64Error + "');");
                    pendingBase64Error = null;
                }
            }
        }, browser.getCefBrowser());

        try {
            Path webDir = WebResourcesManager.getWebDir();
            File indexFile = webDir.resolve("index.html").toFile();
            browser.loadURL(indexFile.toURI().toURL().toString());
        } catch (Exception e) {
            browser.loadHTML("<html><body><h3>Failed to load Digital preview resources: " + e.getMessage() + "</h3></body></html>");
        }
    }

    public void setDirty(boolean dirty) {
        if (isPageLoaded) {
            executeJs("if (window.setDirty) { window.setDirty(" + dirty + "); }");
        }
    }

    public void synthesizeAndRender(String verilogSource, String filePath) {
        if (isPageLoaded) {
            executeJs("if (window.setDirty) { window.setDirty(false); } window.setSynthesizing();");
        }

        DigitalSynthesizer.SynthesisResult result = DigitalSynthesizer.synthesize(verilogSource, filePath);

        ApplicationManager.getApplication().invokeLater(() -> {
            if (result.isSuccess) {
                String b64 = Base64.getEncoder().encodeToString(result.payload.getBytes(StandardCharsets.UTF_8));
                if (!isPageLoaded) {
                    pendingBase64Circuit = b64;
                    pendingBase64Error = null;
                } else {
                    executeJs("window.loadCircuitFromBase64('" + b64 + "');");
                }
            } else {
                String b64 = Base64.getEncoder().encodeToString(result.payload.getBytes(StandardCharsets.UTF_8));
                if (!isPageLoaded) {
                    pendingBase64Error = b64;
                } else {
                    executeJs("window.showErrorFromBase64('" + b64 + "');");
                }
            }
        });
    }

    private void executeJs(String script) {
        try {
            CefBrowser cefBrowser = browser.getCefBrowser();
            if (cefBrowser != null) {
                cefBrowser.executeJavaScript(script, cefBrowser.getURL(), 0);
            }
        } catch (Exception ignored) {}
    }

    @Override
    public @NotNull JComponent getComponent() {
        return mainPanel;
    }

    @Override
    public @NotNull JComponent getPreferredFocusedComponent() {
        return mainPanel;
    }

    @Override
    public @NotNull String getName() {
        return "Digital Circuit Preview";
    }

    @Override
    public void setState(@NotNull FileEditorState state) {}

    @Override
    public boolean isModified() {
        return false;
    }

    @Override
    public boolean isValid() {
        return file != null && file.isValid();
    }

    @Override
    public void addPropertyChangeListener(@NotNull PropertyChangeListener listener) {}

    @Override
    public void removePropertyChangeListener(@NotNull PropertyChangeListener listener) {}

    @Override
    public @Nullable FileEditorLocation getCurrentLocation() {
        return null;
    }

    @Override
    public @Nullable VirtualFile getFile() {
        return file;
    }

    public Project getProject() {
        return project;
    }

    @Override
    public void dispose() {
        if (compileQuery != null) {
            Disposer.dispose(compileQuery);
        }
        Disposer.dispose(browser);
    }
}
