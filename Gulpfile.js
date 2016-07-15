var gulp  = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var minifyHTML = require('gulp-minify-html');

gulp.task('js', function () {
  return gulp.src('./src/javascripts/**.js')
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(uglify())
    .pipe(gulp.dest('./build/javascripts'))
});

gulp.task('css', function() {
  gulp.src('./src/stylesheets/**.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./build/stylesheets'));
});

gulp.task('html', function() {
  gulp.src('./src/**.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./build'));
});

gulp.task('movepng', function() {
  gulp.src('./src/**.png')
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['css', 'js', 'html'], function() {
  gulp.watch('./src/**.html', function() {
    gulp.run('html');
  });
  gulp.watch('./src/stylesheets/**.css', function() {
    gulp.run('css');
  });
  gulp.watch('./src/javascripts/**.js', function() {
    gulp.run('js');
  });
});