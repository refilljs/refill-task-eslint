# ZKflow task eslint

Eslint task in [ZKflow](https://github.com/zaklinaczekodu/zkflow) format

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

Shields
-------

[![npm](https://img.shields.io/npm/v/zkflow-task-eslint.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-eslint)
[![npm](https://img.shields.io/npm/l/zkflow-task-eslint.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-eslint)
[![npm](https://img.shields.io/npm/dm/zkflow-task-eslint.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-eslint)<br>
[![Travis](https://img.shields.io/travis/zaklinaczekodu/zkflow-task-eslint/master.svg?style=flat-square)](https://travis-ci.org/zaklinaczekodu/zkflow-task-eslint)
[![Code Climate](https://img.shields.io/codeclimate/github/zaklinaczekodu/zkflow-task-eslint.svg?style=flat-square)](https://codeclimate.com/github/zaklinaczekodu/zkflow-task-eslint)<br>
[![David](https://img.shields.io/david/zaklinaczekodu/zkflow-task-eslint.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-task-eslint)
[![David](https://img.shields.io/david/dev/zaklinaczekodu/zkflow-task-eslint.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-task-eslint)<br>
[![GitHub forks](https://img.shields.io/github/forks/zaklinaczekodu/zkflow-task-eslint.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-eslint)
[![GitHub stars](https://img.shields.io/github/stars/zaklinaczekodu/zkflow-task-eslint.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-eslint)
[![GitHub followers](https://img.shields.io/github/followers/zaklinaczekodu.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-eslint)

Installation
------------

```bash
npm install --save zkflow-task-eslint zkflow gulp
```

Usage
-----

gulpfile.js

```javaScript
require('zkflow')({
  'lint-js': {
    task: require('zkflow-task-eslint')
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
    rules: {
      'indent': [2, 2],
      'quotes': [2, 'single'],
      'linebreak-style': [2, 'unix'],
      'semi': [2, 'always']
    },
    env: {
      'commonjs': true,
      'browser': true,
      'jasmine': true
    },
    extends: 'eslint:recommended'
  }
}
```

Sponsors
--------

[<img alt="Street Team" src="http://zaklinaczekodu.com/_assets/streetteam.svg" width="200">](http://getstreetteam.com)

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
