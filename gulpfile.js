const { src, dest, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


sass.compiler = require('node-sass');

function html() {
    return src('./src/pug/index.pug')
        .pipe(pug())
        .pipe(dest('./dist'));
}

function css() {
    return src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('./'))
        .pipe(csso())
        .pipe(dest('./dist/css'));
}

watch(['./src/pug/*.pug', './src/**/*/.scss'], function () {
    pug();
    scss();
});


exports.html = html;
exports.css = css;
exports.default = parallel(css, html);
exports.watch = watch;