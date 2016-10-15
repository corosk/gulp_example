var gulp = require('gulp');
/* 監視 */
var watch = require('gulp-watch');
/* 名前変更 */
var rename = require('gulp-rename');
/* css圧縮 */
var clean_css = require('gulp-clean-css');
/* gzip圧縮 */
var gzip = require('gulp-gzip');
/* js圧縮 */
var uglify = require('gulp-uglify');
/* エラー表示 */
var plumber = require('gulp-plumber');
/* 監視・圧縮対象 */
var css_input = '/Users/k_mikami/work/gulp_example/css/**/*.css';
var js_input = '/Users/k_mikami/work/gulp_example/js/**/*.js';
/* 対象ディレクトリ */
var css_output = '/Users/k_mikami/work/gulp_example/css';
var js_output = '/Users/k_mikami/work/gulp_example/js';

/* CSS監視 */
gulp.task('watch_css', () => {
    return watch([css_input], (event) => {
        return cssmin(event.path);
    });
});

/* JS監視 */
gulp.task('watch_js', () => {
    return watch([js_input], (event) => {
        return jsmin(event.path);
    });
});

/* Javascript圧縮 */
function jsmin(strfile){
    gulp.src(strfile,{base:js_output})
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({extname:'.js.min'}))
    .pipe(gzip())
    .pipe(gulp.dest(js_output));
    return true;
};
/* css圧縮 */
function cssmin(strfile) {
    gulp.src(strfile,{base:css_output})
    .pipe(plumber())
    .pipe(clean_css())
    .pipe(rename({extname: '.css.min'}))
    .pipe(gzip())
    .pipe(gulp.dest(css_output));
    return true;
};

// CSS全圧縮
gulp.task("compress_all", function(){
  cssmin(css_input);
  jsmin(js_input);
});

// タスク設定
gulp.task('default', ['watch_css','watch_js']);
// 一括圧縮
gulp.task('compress',['compress_all']);
