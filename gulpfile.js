var gulp = require('gulp'),
    changed = require('gulp-changed'),
    jshint = require ('gulp-jshint'),
    concat = require ('gulp-concat'),
    uglify = require ('gulp-uglify'),
    rename = require('gulp-rename'),
    imagemin = require ('gulp-imagemin'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyhtml = require ('gulp-minify-html'),
    autoprefixer = require ('gulp-autoprefixer'),
    minifyCSS = require ('gulp-minify-css'),
    sass = require('gulp-sass');

// config
var npmPath = 'node_modules/';
var srcDir = './src/main/web/';
var conf = {
    paths: {
        vendorjs: [
            'node_modules/angular/angular.js',
        ],
        scripts: '**/*.js',
        tsScripts: '**/*.ts',
        html: '**/*.html',
        scss: '**/*.scss',
        styles: 'scss/style.scss',
        dist: './target/classes/static/',
        thymeleafTemplatesCompiled: './target/classes/templates'
    }
};

gulp.task('style', function () {
    return gulp.src(conf.paths.styles, {cwd: srcDir})
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: npmPath, outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(conf.paths.dist));
});

gulp.task('default', ['build']);
gulp.task('build', ['style']);