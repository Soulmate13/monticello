const bs = require("browser-sync").create();
const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const webpack_gulp = require('gulp-webpack-bundler');

sass.compiler = require('node-sass');

function html() {
    return src('./src/pug/index.pug')
        .pipe(pug())
        .pipe(dest('./dist/'));
}

function css() {
    return src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(csso())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./dist/css/'));
}

function js() {
    return gulp
        .src(['./src/**/*.js'])
        .pipe(
            webpack_gulp({
                entry: './src/js/script.js',
                mode: 'development'
            })
        )
        .pipe(dest('dist/js'));
};


exports.js = js;
exports.html = html;
exports.css = css;
exports.default = function () {
    bs.init({
        server: "./dist"
    });

    html();
    css();

    watch(['./src/**/*.pug', './src/**/*.scss'], function () {
        html();
        css();
        bs.reload();
        done();
    });
};