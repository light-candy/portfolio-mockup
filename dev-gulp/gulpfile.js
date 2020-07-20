var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = require('browser-sync').reload(),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    uglify = require('gulp-uglify'),
    lineec = require('gulp-line-ending-corrector');

var root = '../project/',
    scss = root + 'sass/',
    js = root + 'src/js',
    jsdist = root + 'dist/js';
    dist = root + 'dist/';

var styleWatchFiles = scss + '**/*.scss';

var cssSRC = [
    root + 'src/css/swiper-bundle.css',
    root + 'style.css'
];
var imgSRC = root + 'src/images/*';
var imgDEST = root + 'dist/images';

function css(){
    return gulp.src([scss + 'style.scss'])
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(lineec())
        .pipe(gulp.dest(root));
}

function concatCSS(){
    return gulp.src(cssSRC)
        .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(lineec())
        .pipe(gulp.dest(dist));
}

function imgmin(){
    return gulp.src(imgSRC)
        .pipe(changed(imgDEST))
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest(imgDEST));
}

function watch(){
    browserSync.init({
        open: 'external',
        server: '/home/tapir/sample/project/'
    });
    gulp.watch(styleWatchFiles, gulp.series([css, concatCSS]));
    gulp.watch(imgSRC, imgmin);
    gulp.watch([dist + 'style.min.css']).on('change', browserSync.reload);
}

exports.css = css;
exports.concatCSS = concatCSS;
exports.watch = watch;
exports.imgmin = imgmin;

var build = gulp.parallel(watch);
gulp.task('default', build);
