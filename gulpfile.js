const cache = require('gulp-cached');
const gulp = require('gulp');
const intercept = require('gulp-intercept');
const join = require('path').join;
const path = require('path');
const rename = require('gulp-rename');
const root = process.cwd();
const superviews = require('superviews.js');

const htmlTemplates = [path.resolve(root, 'app', '**', 'template.html')];

gulp.task('build:templates', () => {
  return gulp.src(htmlTemplates, {
      base: './app'
    })
    .pipe(cache('templates'))
    .pipe(intercept((file) => {
      file.contents = new Buffer(superviews(file.contents.toString(), 'render', 'ctrl', 'es6'));
      return file;
    }))
    .pipe(rename((pth) => {
      pth.extname = '.js';
    }))
    .pipe(gulp.dest("./app"));
});

gulp.task('watch:templates', () => {
  return gulp.watch(htmlTemplates, gulp.series('build:templates'));
});

gulp.task('default', gulp.series('build:templates', 'watch:templates'));
