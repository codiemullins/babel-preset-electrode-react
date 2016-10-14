# babel-preset-electrode-react

> Babel preset including es2015, es2016-loose, and react.

## Install

```sh
$ npm install --save-dev babel-preset-electrode-react
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["electrode-react"]
}
```

### Via CLI

```sh
$ babel script.js --presets electrode-react
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["electrode-react"]
});
```
