// load packages
var gulp = require('gulp'),
    util = require('gulp-util'),
    del = require('del'),
    ts = require('gulp-typescript'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    sourcemaps = require('gulp-sourcemaps');

// create tasks
gulp.task('default', ['copy-html', 'build-css', 'sass-lint']);

gulp.task('clean', function () {
    return del(['public/**']);
});

gulp.task('copy-html', function() {
    // copy any html files in source/ to public/
    gulp.src('source/**/*.html').pipe(gulp.dest('public'));
});

gulp.task('build-css', function() {
    return gulp.src('source/scss/style.scss')
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(sass())
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('public/assets'));
});

gulp.task('sass-lint', function () {
   return gulp.src('source/scss/**/*.scss')
       .pipe(sassLint())
       .pipe(sassLint.format());
});

gulp.task("typescript", function () {
    gulp.src("source/angular/**/*.ts")
        .pipe(ts({
            noImplicitAny: false,
            noEmitOnError: true,
            removeComments: false,
            sourceMap: true,
            out: "app.js",
            target: "es5"
        }))
        .pipe(gulp.dest("public"));
});