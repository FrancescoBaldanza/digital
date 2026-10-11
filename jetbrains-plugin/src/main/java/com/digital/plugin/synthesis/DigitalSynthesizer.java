package com.digital.plugin.synthesis;

import com.digital.plugin.util.WebResourcesManager;
import com.intellij.openapi.diagnostic.Logger;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class DigitalSynthesizer {
    private static final Logger LOG = Logger.getInstance(DigitalSynthesizer.class);

    public static class SynthesisResult {
        public final boolean isSuccess;
        public final String payload; // circuit JSON string if success, error message if failure

        public SynthesisResult(boolean isSuccess, String payload) {
            this.isSuccess = isSuccess;
            this.payload = payload;
        }
    }

    public static String findBinary(String binaryName, String[] extraPaths) {
        String envPath = System.getenv("PATH");
        List<String> searchPaths = new ArrayList<>();
        if (extraPaths != null) {
            for (String p : extraPaths) {
                if (p != null && !p.isEmpty()) searchPaths.add(p);
            }
        }
        if (envPath != null) {
            for (String p : envPath.split(File.pathSeparator)) {
                if (!p.isEmpty()) searchPaths.add(p);
            }
        }

        for (String p : searchPaths) {
            File candidate = new File(p, binaryName);
            if (candidate.exists() && candidate.canExecute()) {
                return candidate.getAbsolutePath();
            }
        }
        return binaryName; // fallback to plain name
    }

    public static SynthesisResult synthesize(String verilogSource, String originalFilePath) {
        File tempFile = null;
        try {
            Path webDir = WebResourcesManager.getWebDir();
            File synthScript = webDir.resolve("synthesize.bundle.js").toFile();

            if (!synthScript.exists()) {
                return new SynthesisResult(false, "Synthesis script not found: " + synthScript.getAbsolutePath());
            }

            tempFile = File.createTempFile("digitaljs_synth_", ".v");
            Files.write(tempFile.toPath(), verilogSource.getBytes(StandardCharsets.UTF_8));

            String nodeBin = findBinary("node", new String[]{"/opt/homebrew/bin", "/usr/local/bin", "/usr/bin"});
            String yosysBin = findBinary("yosys", new String[]{"/opt/homebrew/bin", "/usr/local/bin", "/usr/bin"});

            ProcessBuilder pb = new ProcessBuilder(
                    nodeBin,
                    synthScript.getAbsolutePath(),
                    tempFile.getAbsolutePath(),
                    originalFilePath != null ? originalFilePath : ""
            );

            pb.environment().put("YOSYS_PATH", yosysBin);

            Process process = pb.start();

            ByteArrayOutputStream outBaos = new ByteArrayOutputStream();
            ByteArrayOutputStream errBaos = new ByteArrayOutputStream();

            Thread outThread = new Thread(() -> copyStream(process.getInputStream(), outBaos));
            Thread errThread = new Thread(() -> copyStream(process.getErrorStream(), errBaos));
            outThread.start();
            errThread.start();

            boolean finished = process.waitFor(15, java.util.concurrent.TimeUnit.SECONDS);
            outThread.join(1000);
            errThread.join(1000);

            if (!finished) {
                process.destroyForcibly();
                return new SynthesisResult(false, "Synthesis timed out after 15 seconds.");
            }

            String out = outBaos.toString(StandardCharsets.UTF_8).trim();
            String err = errBaos.toString(StandardCharsets.UTF_8).trim();

            if (out.isEmpty()) {
                return new SynthesisResult(false, err.isEmpty() ? "No synthesis output returned" : err);
            }

            // Extract JSON object from output (in case any stray line preceded it)
            int jsonStart = out.indexOf('{');
            int jsonEnd = out.lastIndexOf('}');
            if (jsonStart == -1 || jsonEnd == -1 || jsonEnd <= jsonStart) {
                return new SynthesisResult(false, "Malformed response: " + out);
            }

            String json = out.substring(jsonStart, jsonEnd + 1);

            if (json.contains("\"status\":\"ok\"")) {
                // Find "circuit":{...}
                int circuitIdx = json.indexOf("\"circuit\":");
                if (circuitIdx != -1) {
                    String circuitJson = json.substring(circuitIdx + 10, json.length() - 1);
                    return new SynthesisResult(true, circuitJson);
                }
                return new SynthesisResult(true, json);
            } else {
                // Extract error message
                return new SynthesisResult(false, parseErrorMessage(json, err));
            }
        } catch (Exception e) {
            LOG.warn("Synthesis failed", e);
            return new SynthesisResult(false, "Synthesis exception: " + e.getMessage());
        } finally {
            if (tempFile != null && tempFile.exists()) {
                //noinspection ResultOfMethodCallIgnored
                tempFile.delete();
            }
        }
    }

    private static String parseErrorMessage(String json, String errFallback) {
        int msgKey = json.indexOf("\"message\":");
        if (msgKey != -1) {
            int startQuote = json.indexOf('"', msgKey + 10);
            if (startQuote != -1) {
                int endQuote = json.indexOf('"', startQuote + 1);
                if (endQuote != -1) {
                    return json.substring(startQuote + 1, endQuote).replace("\\n", "\n").replace("\\\"", "\"");
                }
            }
        }
        return !errFallback.isEmpty() ? errFallback : json;
    }

    private static void copyStream(InputStream in, OutputStream out) {
        try {
            byte[] buf = new byte[4096];
            int n;
            while ((n = in.read(buf)) != -1) {
                out.write(buf, 0, n);
            }
        } catch (IOException ignored) {}
    }
}
