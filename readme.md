# @lucy/rollup-plugin

A Rollup plugin for Lucy.

## Install

```shell
npm install @lucy/rollup-plugin --save-dev
```

## Usage

> *Important*: This plugin currently only works with ESM rollup configs.

Import and use like any other Rollup plugin.

__rollup.config.mjs__

```js
// rollup.config.js
import lucy from '@lucy/rollup-plugin';

export default ({
  input: 'entry.js',
  plugins: [lucy()],
  output: [{
    file: 'bundle.js',
    format: 'es'
  }]
});
```

## License

BSD-2-Clause