# PostCSS Color Emoji [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]
> &#x270F; Emoji in full color!

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Dependency Status][david-img]][david-url]


```css
/* Input */
.example {
  font-family: color-emoji;
}
```


```css
/* Output */
.example {
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
```


## Install

```sh
# npm
npm install --save-dev postcss-color-emoji

# or yarn
yarn add --dev postcss-color-emoji
```


## Usage

Add it to your PostCSS work-flow, [whatever way you choose to](https://github.com/postcss/postcss#usage).

```js
// Using a postcss.config.js
const colorEmoji = require('postcss-color-emoji');

module.exports = {
  plugins: [
    colorEmoji
  ]
};

```

Then use the `color-emoji` font-family name where ever you need it.

```css
.one {
  font-family: sans-serif, color-emoji;
}
```

```pcss
/* Using custom properties */
:root {
  --emoji: color-emoji;
}

.two {
  font: var(--emoji);
}
```

## [License](./LICENSE) ##


[david-img]: https://img.shields.io/david/philipbordallo/postcss-color-emoji.svg
[david-url]: https://david-dm.org/philipbordallo/postcss-color-emoji

[cli-img]: https://img.shields.io/travis/philipbordallo/postcss-color-emoji.svg
[cli-url]: https://travis-ci.org/philipbordallo/postcss-color-emoji

[npm-img]: https://img.shields.io/npm/v/postcss-color-emoji.svg
[npm-url]: https://www.npmjs.com/package/postcss-color-emoji

[postcss]: https://github.com/postcss/postcss
