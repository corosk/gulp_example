var gulp = require('gulp');
/* 監視 */
var watch = require('gulp-watch');
/* 名前変更 */
var rename = require('gulp-rename');
/* css圧縮 */
var clean_css = require('gulp-clean-css');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
/* js圧縮 */
var uglify = require('gulp-uglify');
var git = require('gulp-git');
/* エラー表示 */
var plumber = require('gulp-plumber');

var css_input = 'css/*.css';
var js_input = 'js/*.js';

/* Javascript圧縮 */
gulp.task('jsmin',function (){
    gulp.src(js_input)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({extname:'.js.min.tar.gz'}))
    .pipe(gulp.dest('js'));
});
/* css圧縮 */
gulp.task('cssmin', function () {
    gulp.src(css_input,{base:'./css'})
    .pipe(plumber())
    .pipe(
        clean_css({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        })
        )
    .pipe(rename({extname: '.css.min.tar.gz'}))
    .pipe(gulp.dest('css'));
});

/* CSS監視 */
gulp.task('watch_css', () => {
    return watch([css_input], () => {
        return gulp.start('cssmin');
    });
});

/* JS監視 */
gulp.task('watch_js', () => {
    return watch([js_input], () => {
        return gulp.start('jsmin');
    });
});

gulp.task('default', ['watch_css','watch_js']);
