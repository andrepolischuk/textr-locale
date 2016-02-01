# textr-locale [![Build Status][travis-image]][travis-url]

> Detect the client locale for [Textr][textr]

## Install

```sh
npm install --save textr-locale
```

## Usage

Plugin adds the client locale to `textr` [defaults][textr-defaults].

```js
import textr from 'textr';
import locale from 'textr-locale';
import ellipses from 'typographic-ellipses';
import quotes from 'typographic-quotes';
import spaces from 'typographic-single-spaces';

const tf = textr()
  .use(locale) // en-us
  .use(spaces)
  .use(quotes)
  .use(ellipses);

tf('Hello  "world"...'); // Hello “world”…
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/textr-locale
[travis-image]: https://travis-ci.org/andrepolischuk/textr-locale.svg?branch=master

[textr]: https://github.com/A/textr
[textr-defaults]: https://github.com/A/textr#textrdefaults
