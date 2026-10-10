const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const outDir = path.resolve(__dirname, '../jetbrains-plugin/src/main/resources/web');
fs.mkdirSync(outDir, { recursive: true });

const uniboVerilog = fs.readFileSync(path.resolve(__dirname, '../libraries/unibo/modules.v'), 'utf8');

const compiler = webpack({
  mode: 'production',
  target: 'node',
  entry: path.resolve(__dirname, 'synthesize-entry.js'),
  output: {
    path: outDir,
    filename: 'synthesize.bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      __UNIBO_VERILOG_SOURCE__: JSON.stringify(uniboVerilog)
    })
  ]
});

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.error('Synthesis bundling error:', err || stats.toString());
    process.exit(1);
  }
  console.log('Successfully bundled synthesize.bundle.js into', outDir);
});
