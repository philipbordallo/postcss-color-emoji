const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const colorEmoji = require('../dist/index.cjs');
const systemUI = require('postcss-font-family-system-ui');
const systemMonospace = require('postcss-system-monospace');


const root = path.resolve(__dirname, '..');
const from = path.resolve(root, 'scripts', 'visual-test.css');
const to = path.resolve(root, 'docs', 'styles.css');

async function run() {
  const file = await fs.promises.readFile(from);

  const result = await postcss([
    colorEmoji,
    systemMonospace,
    systemUI({ browsers: ['last 2 versions'] }),
  ]).process(file, { from, to });

  await fs.promises.writeFile(to, result.css, { encoding: 'utf-8' });
}

run();
