#!/usr/bin/env bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$DIR/.." && pwd)"

echo "==> 1. Preparing resources..."
node "$ROOT_DIR/scripts/build-synth.js"
cp -f "$ROOT_DIR"/dist/*.js "$DIR/src/main/resources/web/"

echo "==> 2. Compiling Java classes..."
mkdir -p "$DIR/build/classes"
javac -d "$DIR/build/classes" \
      -cp "$(cat /tmp/jb_classpath.txt)" \
      "$DIR"/src/main/java/com/digital/plugin/util/*.java \
      "$DIR"/src/main/java/com/digital/plugin/synthesis/*.java \
      "$DIR"/src/main/java/com/digital/plugin/editor/*.java

echo "==> 3. Creating plugin jar..."
mkdir -p "$DIR/build/dist/digital-preview/lib"
mkdir -p "$DIR/build/dist/digital-preview/web"

# Copy web files
cp -r "$DIR"/src/main/resources/web/* "$DIR/build/dist/digital-preview/web/"

# Create jar with classes, META-INF and web resources fallback
cd "$DIR/build/classes"
jar cf "$DIR/build/dist/digital-preview/lib/digital-preview.jar" com/
cd "$DIR/src/main/resources"
jar uf "$DIR/build/dist/digital-preview/lib/digital-preview.jar" META-INF/ web/

echo "==> 4. Creating plugin zip..."
cd "$DIR/build/dist"
zip -r "$DIR/build/digital-preview-1.0.0.zip" digital-preview/

echo "==> 5. Installing plugin to local JetBrains IDEs..."
WEBSTORM_PLUGINS="$HOME/Library/Application Support/JetBrains/WebStorm2026.2/plugins"
CLION_PLUGINS="$HOME/Library/Application Support/JetBrains/CLion2026.2/plugins"

if [ -d "$WEBSTORM_PLUGINS" ]; then
    rm -rf "$WEBSTORM_PLUGINS/digital-preview" "$WEBSTORM_PLUGINS/digitaljs-preview"
    cp -r "$DIR/build/dist/digital-preview" "$WEBSTORM_PLUGINS/"
    cp -r "$DIR/build/dist/digital-preview" "$WEBSTORM_PLUGINS/digitaljs-preview"
    echo "    ✓ Installed into WebStorm 2026.2"
fi

if [ -d "$CLION_PLUGINS" ]; then
    rm -rf "$CLION_PLUGINS/digital-preview" "$CLION_PLUGINS/digitaljs-preview"
    cp -r "$DIR/build/dist/digital-preview" "$CLION_PLUGINS/"
    cp -r "$DIR/build/dist/digital-preview" "$CLION_PLUGINS/digitaljs-preview"
    echo "    ✓ Installed into CLion 2026.2"
fi

echo "==> Build and installation complete!"
