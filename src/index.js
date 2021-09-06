import createFontFamilyString from './createFontFamilyString';

const COLOR_EMOJI_FONTS = createFontFamilyString([
  'Apple Color Emoji', // macOS
  'Segoe UI Emoji', // Windows
  'Segoe UI Symbol', // Windows
  'Noto Color Emoji', // Linux
]);

export default () => ({
  postcssPlugin: 'postcss-color-emoji',
  Once(root) {
    root.walkDecls(
      // Match custom properties (`--custom-property`), `font`, and `font-family`
      /(?:^(?:-|\\002d){2})|(?:^font(?:-family)?$)/i,
      (decl) => {
        decl.value = decl.value.replace(/color-emoji/, COLOR_EMOJI_FONTS);
      },
    );
  },
});
