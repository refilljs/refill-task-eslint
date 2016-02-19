'use strict';

var eslint = require('gulp-eslint');
var zkutils = require('gulp-zkflow-utils');
var zkflowWatcher = require('zkflow-watcher');
var gulpIf = require('gulp-if');
var defaults = require('lodash.defaults');

function getEslintTask(options, gulp, mode) {

  function eslintTask(next) {

    var logger = zkutils.logger('lint-js');
    var nextHandler;
    var eslintOptions = defaults({}, options.eslint, {
      fix: mode.eslintFix
    });

    nextHandler = new zkutils.NextHandler({
      next: next,
      watch: mode.watch,
      logger: logger
    });

    zkflowWatcher.watch(runEslint, mode.watch && !mode.eslintFix, options.globs, logger);

    function runEslint() {
      return nextHandler.handle(
        zkutils.promisify(
          gulp
          .src(options.globs, options.globsOptions)
          .pipe(eslint(eslintOptions))
          .pipe(gulpIf(mode.eslintFix, gulp.dest(options.dest)))
          .pipe(eslint.format())
          .pipe(eslint.failAfterError())
        )
      );
    }

  }

  return eslintTask;

}

module.exports = {
  getTask: getEslintTask,
  defaultOptions: {
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
};
