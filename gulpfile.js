// Gulp import and its plugins
const gulp = require('gulp');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const historyApiFallback = require('connect-history-api-fallback');

// Webpack config
const webpackStream = require('webpack-stream');
const config = require('./webpack.config.js');

// Task to translate all vue files to minified Js files
const vueTask = () => {
    return gulp
        .src('./vue/*.vue')
        .pipe(webpackStream(config))
        .pipe(rename({ dirname: 'build' }))
        .pipe(gulp.dest('./'));
};

const copyIndexHtml = () => {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./build/'));
};

// Arrow function to mock a server
const buildServer = cb => {
    browserSync.init({
        server: './build/',
        port: 8080,
        host: '0.0.0.0',
        middleware: [historyApiFallback()]
    }, cb);
};

// Default export (development task)
exports.default = gulp.series(vueTask, copyIndexHtml, buildServer);

/* ////////////////////////////////////////////////////////////////////// */
