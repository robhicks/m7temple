const babel = require('rollup-plugin-babel');
const del = require('del');
const gulp = require('gulp');
const intercept = require('gulp-intercept');
const join = require('path').join;
const less = require('rollup-plugin-less');
const path = require('path');
const rename = require('gulp-rename');
const resolve = require('rollup-plugin-node-resolve');
const rollup = require('gulp-better-rollup');
const root = process.cwd();
const superviews = require('superviews.js');

const appFiles = [path.resolve(root, 'app', '**', '*.js'), path.resolve(root, 'app', '**', '*.less'), path.resolve(root, 'server', 'css', 'wc', '**', '*.less')];
const entry = path.resolve(root, 'app', 'app-router', 'component.js');
const htmlTemplates = [path.resolve(root, 'app', '**', 'template.html')];
const lessFiles = [path.resolve(root, 'server', 'css', 'index.less'), path.resolve(root, 'server', 'css', 'normalize.less')];
const vendorFiles = path.resolve(root, 'public', 'vendor');
const wcFiles = path.resolve(root, 'public', 'vendor', 'wc');
const quill = path.resolve(root, 'public', 'vendor', 'quill');
const medium = path.resolve(root, 'public', 'vendor', 'medium-editor');

gulp.task('clean', function() {
  return del(path.resolve(root, 'public', 'vendor'));
});

gulp.task('build:templates', () => {
  return gulp.src(htmlTemplates, {
      base: './app'
    })
    .pipe(intercept((file) => {
      file.contents = new Buffer(superviews(file.contents.toString(), 'render', 'ctrl', 'es6'));
      return file;
    }))
    .pipe(rename((pth) => {
      pth.extname = '.js';
    }))
    .pipe(gulp.dest("./app"));
});

gulp.task('build:prereqs', () => {

})

gulp.task('build:bundle', () => {

})

gulp.task('watch:templates', () => {
  return gulp.watch(htmlTemplates, gulp.series('build:templates'));
});

gulp.task('watch', gulp.parallel('watch:templates'));


gulp.task('default', gulp.series('clean', gulp.parallel('build:templates'), 'watch'));
