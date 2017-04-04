const gulp = require('gulp');
const path = require('path');
const intercept = require('gulp-intercept');
const join = require('path').join;
const rename = require('gulp-rename');
const root = process.cwd();
const superviews = require('superviews.js');

const vendorFiles = join(root, 'dist', 'vendor');
const htmlTemplates = [path.resolve(root, 'src', '**', 'template.html')];
// your gulp tasks here

gulp.task('build:js', () => {
  return Promise.all([
    gulp.src(htmlTemplates, {base: './app'}).pipe(intercept((file) => {file.contents = new Buffer(superviews(file.contents.toString(), 'render', 'ctrl', 'es6')); return file;})).pipe(rename((pth) => {pth.extname = '.js';})).pipe(gulp.dest("./src")),
    gulp.src(['node_modules/webcomponents.js/*.js', 'node_modules/webcomponents.js/*.map', 'node_modules/incremental-dom/dist/incremental-dom-min.*', '!node_modules/webcomponents.js/gulpfile.js']).pipe(gulp.dest(vendorFiles)),
    gulp.src(join(root, 'node_modules', 'incremental-dom', 'dist', '*.*')).pipe(gulp.dest(vendorFiles)),
  ]).catch((err) => console.log("err", err));
});

gulp.task("watch", function() {
  return gulp.watch(htmlTemplates, gulp.series('build:js'));
});


// create a shared registry between the master gulpfile and your gulpfile
const configure = require('./node_modules/frontier-build-tools/plugins/configure-registry.js');
gulp.registry(configure({
  startCmd: ['echo', ['not starting server. run it yourself']],
  assetManifest: require('path').resolve(process.cwd(), './asset.manifest.json')
}));

// register the master gulpfile with gulp. This MUST be declared after all your gulp tasks
// to be able to run multiple gulp tasks of the same name
const HubRegistry = require('gulp-hub');
const hub = new HubRegistry(['./node_modules/frontier-build-tools/gulpfile.js']);
gulp.registry(hub);
