# Refill task eslint

Eslint task in [Refill](https://github.com/refilljs/refill) format

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-task-eslint.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-eslint)
[![npm](https://img.shields.io/npm/l/refill-task-eslint.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-eslint)
[![npm](https://img.shields.io/npm/dm/refill-task-eslint.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-eslint)
[![Travis](https://img.shields.io/travis/refilljs/refill-task-eslint/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-task-eslint)<br>
[![bitHound Overall Score](https://www.bithound.io/github/refilljs/refill-task-eslint/badges/score.svg)](https://www.bithound.io/github/refilljs/refill-task-eslint)
[![bitHound Dependencies](https://www.bithound.io/github/refilljs/refill-task-eslint/badges/dependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-eslint/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/refilljs/refill-task-eslint/badges/devDependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-eslint/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/refilljs/refill-task-eslint/badges/code.svg)](https://www.bithound.io/github/refilljs/refill-task-eslint)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-task-eslint.svg?style=flat-square)](https://github.com/refilljs/refill-task-eslint)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-task-eslint.svg?style=flat-square)](https://github.com/refilljs/refill-task-eslint)
[![GitHub followers](https://img.shields.io/github/followers/refilljs.svg?style=flat-square)](https://github.com/refilljs/refill-task-eslint)

Installation
------------

```bash
npm install --save refill-task-eslint refill gulp
```

Usage
-----

gulpfile.js

```javaScript
require('refill')({
  'lint-js': {
    task: require('refill-task-eslint')
  }
}, require('gulp'), mode)
```

### mode

Mode object. Determines task mode of operation.

```javaScript
{
  // If watch is true and eslintFix is false rerun eslint on any js file changes. Do not stop on errors.
  // If false run only once and stop on any errors
  watch: true
  // If false run only once and stop on any errors, and attempt to fix what can be fixed automatically by eslint itself
  eslintFix: true
}
```

Default options
---------------

```javaScript
{
  globs: [
    'gulpfile.js',
    'gulp/*.js',
    'gulp/**/*.js',
    'src/*.js',
    'src/**/*.js'
  ],
  globsOptions: {
    base: './'
  },
  dest: '',
  eslint: {
    extends: 'eslint:recommended'
  }
}
```

Sponsors
--------

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
