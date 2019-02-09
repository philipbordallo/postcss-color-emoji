import postcss from 'postcss';

const PLUGIN_NAME = 'postcss-color-emoji';

const MATCH_FONT_FAMILY = /(?:^(?:-|\\002d){2})|(?:^font(?:-family)?$)/i;
const SYSTEM_MONOSPACE_FONTS = [
  'Apple Color Emoji', // macOS
  'Segoe UI Emoji', // Windows
  'Segoe UI Symbol', // Windows
  'Noto Color Emoji', // Linux
].join(', ');

export default postcss.plugin(PLUGIN_NAME, () => (root) => {
  root.walkDecls(MATCH_FONT_FAMILY, (decl) => {
    decl.value = decl.value.replace(/color-emoji/, SYSTEM_MONOSPACE_FONTS); // eslint-disable-line no-param-reassign
  });
});
