# wavy hr
![tests](https://github.com/substrate-system/wavy-hr/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/wavy-hr?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://packagephobia.com/badge?p=@substrate-system/wavy-hr)](https://packagephobia.com/result?p=@substrate-system/wavy-hr)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

An `hr` tag with style. Be sure to copy the file `./dist/wave.svg` into the root public folder on your web server. The CSS depends on that file.

[See a live demo](https://substrate-system.github.io/wavy-hr/)

<!-- toc -->

- [install](#install)
- [API](#api)
  * [ESM](#esm)
  * [Common JS](#common-js)
- [CSS](#css)
  * [Import CSS](#import-css)
- [use](#use)
  * [JS](#js)
  * [HTML](#html)
  * [pre-built JS](#pre-built-js)

<!-- tocstop -->

## install

```sh
npm i -S @substrate-system/wavy-hr
```

## API
ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/wavy-hr'
```

### Common JS
```js
require('@substrate-system/wavy-hr')
```

## CSS

### Import CSS

```js
import '@substrate-system/wavy-hr/css'
```

Or minified:
```js
import '@substrate-system/wavy-hr/css/min'
```

## use
This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import '@substrate-system/wavy-hr'
```

### HTML
```html
<div>
    <wavy-hr></wavy-hr>
</div>
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/wavy-hr/dist/index.min.js ./public
```

#### HTML
```html
<script type="module" src="./index.min.js"></script>
```
