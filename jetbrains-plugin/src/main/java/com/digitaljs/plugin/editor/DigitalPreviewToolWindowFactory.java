package com.digitaljs.plugin.editor;

import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.fileEditor.FileEditorManager;
import com.intellij.openapi.fileEditor.FileEditorManagerEvent;
import com.intellij.openapi.fileEditor.FileEditorManagerListener;
import com.intellij.openapi.project.DumbAware;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.Disposer;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.ui.content.Content;
import com.intellij.ui.content.ContentFactory;
import com.intellij.ui.content.ContentManager;
import com.intellij.ui.jcef.JBCefBrowser;
import com.intellij.ui.jcef.JBCefBrowserBase;
import com.intellij.ui.jcef.JBCefJSQuery;
import com.intellij.openapi.wm.ToolWindow;
import com.intellij.openapi.wm.ToolWindowFactory;
import org.cef.browser.CefBrowser;
import org.cef.browser.CefFrame;
import org.cef.handler.CefLoadHandlerAdapter;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

public class DigitalPreviewToolWindowFactory implements ToolWindowFactory, DumbAware {

    @Override
    public void createToolWindowContent(@NotNull Project project, @NotNull ToolWindow toolWindow) {
        DigitalPreviewPanel previewPanel = new DigitalPreviewPanel(project);

        ContentManager contentManager = toolWindow.getContentManager();
        Content content = ContentFactory.getInstance().createContent(previewPanel.getComponent(), "", false);
        contentManager.addContent(content);

        // Add compile action button to toolbar
        AnAction compileAction = new AnAction("Compile", "Synthesize and render the circuit", null) {
            @Override
            public void actionPerformed(@NotNull AnActionEvent e) {
                previewPanel.compile();
            }
            @Override
            public void update(@NotNull AnActionEvent e) {
                e.getPresentation().setEnabledAndVisible(hasVerilogFile(project));
            }
        };
        List<AnAction> actions = new ArrayList<>();
        actions.add(compileAction);
        toolWindow.setTitleActions(actions);

        // Listen for file selection changes
        FileEditorManagerListener listener = new FileEditorManagerListener() {
            @Override
            public void selectionChanged(@NotNull FileEditorManagerEvent event) {
                VirtualFile selectedFile = event.getNewFile();
                if (selectedFile != null && isVerilogFile(selectedFile)) {
                    previewPanel.setFile(selectedFile);
                    previewPanel.compile();
                }
            }
        };
        Disposer.register(toolWindow.getDisposable(), () ->
            FileEditorManager.getInstance(project).removeFileEditorManagerListener(listener));
        FileEditorManager.getInstance(project).addFileEditorManagerListener(listener);

        // Auto-compile if a Verilog file is already selected
        VirtualFile[] selectedFiles = FileEditorManager.getInstance(project).getSelectedFiles();
        if (selectedFiles.length > 0 && isVerilogFile(selectedFiles[0])) {
            previewPanel.setFile(selectedFiles[0]);
        }
    }

    private static boolean isVerilogFile(@NotNull VirtualFile file) {
        String ext = file.getExtension();
        return ext != null && (ext.equalsIgnoreCase("v") || ext.equalsIgnoreCase("sv"));
    }

    private static boolean hasVerilogFile(@NotNull Project project) {
        VirtualFile[] files = FileEditorManager.getInstance(project).getSelectedFiles();
        return files.length > 0 && isVerilogFile(files[0]);
    }

    // ---------------------------------------------------------
    // Inner panel: holds the JCEF browser and synthesis logic
    // ---------------------------------------------------------
    private static class DigitalPreviewPanel {
        private final Project project;
        private final JPanel mainPanel;
        private final JBCefBrowser browser;
        private volatile VirtualFile currentFile;
        private final AtomicBoolean isPageLoaded = new AtomicBoolean(false);
        private volatile String pendingBase64Circuit = null;
        private volatile String pendingBase64Error = null;
        private JBCefJSQuery compileQuery;

        DigitalPreviewPanel(@NotNull Project project) {
            this.project = project;
            this.browser = new JBCefBrowser();
            this.mainPanel = new JPanel(new BorderLayout());
            this.mainPanel.setFocusable(true);
            this.mainPanel.add(browser.getComponent(), BorderLayout.CENTER);

            compileQuery = JBCefJSQuery.create((JBCefBrowserBase) browser);
            compileQuery.addHandler(request -> {
                if ("compile".equals(request)) {
                    compile();
                }
                return new JBCefJSQuery.Response("ok");
            });

            browser.getJBCefClient().addLoadHandler(new CefLoadHandlerAdapter() {
                @Override
                public void onLoadEnd(CefBrowser b, CefFrame frame, int httpStatusCode) {
                    isPageLoaded.set(true);
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

            loadWebPage();
        }

        private void loadWebPage() {
            try {
                Path webDir = com.digitaljs.plugin.util.WebResourcesManager.getWebDir();
                File indexFile = webDir.resolve("index.html").toFile();
                // Load with ?mode=split so the UI collapses sidebar/editor columns
                browser.loadURL(indexFile.toURI().toURL().toString() + "?mode=split");
            } catch (Exception e) {
                browser.loadHTML("<html><body><h3>Failed to load DigitalJS preview resources: " + e.getMessage() + "</h3></body></html>");
            }
        }

        void setFile(@NotNull VirtualFile file) {
            this.currentFile = file;
        }

        void compile() {
            if (currentFile == null) return;

            String verilogSource;
            try {
                verilogSource = new String(currentFile.contentsToByteArray(), StandardCharsets.UTF_8);
            } catch (Exception e) {
                showError("Could not read file: " + e.getMessage());
                return;
            }

            if (isPageLoaded.get()) {
                executeJs("window.setSynthesizing();");
            }

            com.digitaljs.plugin.synthesis.DigitalJsSynthesizer.SynthesisResult result =
                    com.digitaljs.plugin.synthesis.DigitalJsSynthesizer.synthesize(verilogSource, currentFile.getPath());

            com.intellij.openapi.application.ApplicationManager.getApplication().invokeLater(() -> {
                if (result.isSuccess) {
                    String b64 = Base64.getEncoder().encodeToString(result.payload.getBytes(StandardCharsets.UTF_8));
                    if (!isPageLoaded.get()) {
                        pendingBase64Circuit = b64;
                        pendingBase64Error = null;
                    } else {
                        executeJs("window.loadCircuitFromBase64('" + b64 + "');");
                    }
                } else {
                    String b64 = Base64.getEncoder().encodeToString(result.payload.getBytes(StandardCharsets.UTF_8));
                    if (!isPageLoaded.get()) {
                        pendingBase64Error = b64;
                    } else {
                        executeJs("window.showErrorFromBase64('" + b64 + "');");
                    }
                }
            });
        }

        private void showError(String message) {
            if (isPageLoaded.get()) {
                executeJs("window.showErrorFromBase64('" +
                        Base64.getEncoder().encodeToString(message.getBytes(StandardCharsets.UTF_8)) + "');");
            }
        }

        private void executeJs(String script) {
            try {
                CefBrowser cefBrowser = browser.getCefBrowser();
                if (cefBrowser != null) {
                    cefBrowser.executeJavaScript(script, cefBrowser.getURL(), 0);
                }
            } catch (Exception ignored) {}
        }

        @NotNull
        JComponent getComponent() {
            return mainPanel;
        }

        void dispose() {
            if (compileQuery != null) {
                Disposer.dispose(compileQuery);
            }
            Disposer.dispose(browser);
        }
    }
}
