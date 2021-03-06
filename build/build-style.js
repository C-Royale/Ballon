const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
  gulp.src(['../packages/theme-default/index.less', '../packages/theme-default/components/*.less'])
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('../dist/styles'));
});

gulp.task('font', function () {
  gulp.src('../packages/theme-default/fonts/*.*')
    .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', ['css', 'font']);
