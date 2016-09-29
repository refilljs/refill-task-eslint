'use strict';

var eslint = require('gulp-eslint');
var zkutils = require('gulp-zkflow-utils');
var zkflowWatcher = require('zkflow-watcher');
var gulpIf = require('gulp-if');
var defaults = require('lodash.defaults');
var ZkflowNextHandler = require('zkflow-next-handler');

function getEslintTask(options, gulp, mode) {

  function eslintTask(next) {

    var logger = zkutils.logger('lint-js');
    var zkflowNextHandler;
    var eslintOptions = defaults({}, options.eslint, {
      fix: mode.eslintFix
    });

    zkflowNextHandler = new ZkflowNextHandler({
      next: next,
      watch: mode.watch,
      logger: logger,
      quickFinish: true
    });

    zkflowWatcher.watch(runEslint, mode.watch && !mode.eslintFix, options.globs, logger);

    function runEslint() {
      return zkflowNextHandler.handle(
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
      extends: 'eslint:recommended'
    }
  }
};
