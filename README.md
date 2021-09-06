# PostCSS Color Emoji [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]
> &#x270F; Emoji in full color!

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Dependency Status][david-img]][david-url]

Depending on the font, some emojis are rendered as their text variation instead of the colored version you know and love. This [PostCSS][postcss] plugin gives you full access to the system emojis on macOS, Windows, and Linux.

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

Check out the <a href="https://philipbordallo.github.io/postcss-color-emoji/">visual test</a>.

## Install

```sh
# npm
npm install --save-dev postcss postcss-color-emoji

# or yarn
yarn add --dev postcss postcss-color-emoji
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

```css
/* Using custom properties */
:root {
  --emoji: color-emoji;
}

.two {
  font: var(--emoji);
}
```

## Credits
- Nick Galbreath for his article on the [CSS Color emoji stack](https://www.client9.com/css-color-emoji-stack/)
- Mark Dotto for his piece on [shipping system fonts to GitHub.com](http://markdotto.com/2018/02/07/github-system-fonts/)


## [License](./LICENSE) ##


[david-img]: https://img.shields.io/david/philipbordallo/postcss-color-emoji.svg
[david-url]: https://david-dm.org/philipbordallo/postcss-color-emoji

[cli-img]: https://img.shields.io/travis/philipbordallo/postcss-color-emoji.svg
[cli-url]: https://travis-ci.org/philipbordallo/postcss-color-emoji

[npm-img]: https://img.shields.io/npm/v/postcss-color-emoji.svg
[npm-url]: https://www.npmjs.com/package/postcss-color-emoji

[postcss]: https://github.com/postcss/postcss
