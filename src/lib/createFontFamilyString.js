/**
 * Takes an array of font names and returns a font family string
 * @param {Array} array - Array of font names
 * @returns {string}
 */
function createFontFamilyString(array) {
  return array
    .map((font) => {
      const hasWhiteSpace = /\s/g.test(font);

      if (hasWhiteSpace) {
        return `"${font}"`;
      }

      return font;
    })
    .join(', ');
}

export default createFontFamilyString;
