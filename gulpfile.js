var gulp = require('gulp');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css')
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var uglify = require('gulp-uglify');
var css_input = 'css/*.css';
var js_input = 'js/*.js';

/* Javascript圧縮 */
gulp.task('jsmin',function (){
    gulp.src(js_input,{base:'./js'})
    .pipe(uglify())
    .pipe(rename({extname:'.js.min.tar.gz'}))
    .pipe(gulp.dest('js'));
});
/* css圧縮 */
gulp.task('cssmin', function () {
  gulp.src(css_input,{base:'./css'})
  .pipe(cssmin())
  .pipe(minifyCss())
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
