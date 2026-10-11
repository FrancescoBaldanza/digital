package com.digital.plugin.util;

import com.intellij.openapi.application.PathManager;
import com.intellij.openapi.diagnostic.Logger;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class WebResourcesManager {
    private static final Logger LOG = Logger.getInstance(WebResourcesManager.class);
    private static Path cachedWebDir = null;

    private static final String[] ASSETS = {
            "index.html",
            "main.js",
            "288.main.js",
            "550.main.js",
            "821.main.js",
            "src_engines_worker-worker_mjs.main.js",
            "vendors-node_modules_3vl_dist_index_js-node_modules_jquery_dist_jquery-exposed_js-node_module-80f129.main.js",
            "digitaljs_icon.svg",
            "synthesize.bundle.js"
    };

    public static synchronized Path getWebDir() {
        if (cachedWebDir != null && Files.exists(cachedWebDir.resolve("index.html"))) {
            return cachedWebDir;
        }

        // 1. Check if running unpacked in plugins folder
        Path modernDir = Paths.get(PathManager.getPluginsPath(), "digital-preview", "web");
        if (Files.exists(modernDir.resolve("index.html"))) {
            cachedWebDir = modernDir;
            return cachedWebDir;
        }

        Path pluginsDir = Paths.get(PathManager.getPluginsPath(), "digitaljs-preview", "web");
        if (Files.exists(pluginsDir.resolve("index.html"))) {
            cachedWebDir = pluginsDir;
            return cachedWebDir;
        }

        // 2. Extract from classpath / jar to plugins cache
        try {
            Path targetDir = Paths.get(PathManager.getSystemPath(), "digitaljs-preview-web");
            Files.createDirectories(targetDir);

            for (String asset : ASSETS) {
                String resourcePath = "/web/" + asset;
                try (InputStream in = WebResourcesManager.class.getResourceAsStream(resourcePath)) {
                    if (in != null) {
                        Path dest = targetDir.resolve(asset);
                        Files.copy(in, dest, StandardCopyOption.REPLACE_EXISTING);
                    }
                }
            }

            cachedWebDir = targetDir;
            return cachedWebDir;
        } catch (Exception e) {
            LOG.error("Failed to extract Digital web resources", e);
            throw new RuntimeException("Could not initialize Digital preview resources: " + e.getMessage(), e);
        }
    }
}
