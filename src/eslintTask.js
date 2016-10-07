'use strict';

var path = require('path');
var eslint = require('gulp-eslint');
var refillPromisifyStream = require('refill-promisify-stream');
var refillWatcher = require('refill-watcher');
var gulpIf = require('gulp-if');
var defaults = require('lodash.defaults');
var RefillNextHandler = require('refill-next-handler');
var refillLogger = require('refill-logger');

function getEslintTask(options, gulp, mode) {

  function eslintTask(next) {

    var logger = refillLogger('lint-js');
    var refillNextHandler;
    var eslintOptions = defaults({}, options.eslint, {
      fix: mode.eslintFix
    });

    refillNextHandler = new RefillNextHandler({
      next: next,
      watch: mode.watch,
      logger: logger,
      quickFinish: true
    });

    refillWatcher.watch(runEslint, mode.watch && !mode.eslintFix, options.globs, logger);

    function runEslint() {
      return refillNextHandler.handle(
        refillPromisifyStream(
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
      configFile: path.join(__dirname, '.eslintrc.dist.json')
    }
  }
};
