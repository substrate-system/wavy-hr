# wavy hr
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/wavy-hr/nodejs.yml?style=flat-square)](https://github.com/substrate-system/wavy-hr/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/wavy-hr?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![install size](https://packagephobia.com/badge?p=@substrate-system/wavy-hr)](https://packagephobia.com/result?p=@substrate-system/wavy-hr)
[![GZip size](https://flat.badgen.net/bundlephobia/minzip/@substrate-system/web-component)](https://bundlephobia.com/package/@substrate-system/web-component)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


An `hr` tag with style.

[See a live demo](https://substrate-system.github.io/wavy-hr/)

> [!IMPORTANT]  
> Be sure to copy the file `./dist/wave.svg` into the
> root public folder on your web server. The CSS depends on that file.


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
  * [Server-side rendering](#server-side-rendering)

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
cp ./node_modules/@substrate-system/wavy-hr/dist/index.min.js ./public/wavy-hr.min.js
```

#### HTML
```html
<script type="module" src="./wavy-hr.min.js"></script>
```

### Server-side rendering
For server-side rendering scenarios, you can use the `/html` export to generate the HTML string without requiring a browser environment.

```js
import { render } from '@substrate-system/wavy-hr/html'

const html = render()
// Returns: '<hr class="wavy-hr" />'
```

#### Use case example
```js
// In your server-side rendering code
import { render } from '@substrate-system/wavy-hr/html'

function renderPage() {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="/path/to/wavy-hr.css">
        </head>
        <body>
            <h1>My Page</h1>
            ${render()}
            <p>More content...</p>
        </body>
        </html>
    `
}
```

> [!NOTE]  
> When using server-side rendering, you still need to include the CSS file and
> the `wave.svg` asset for proper styling. The `render` export only provides the
> markup structure.
