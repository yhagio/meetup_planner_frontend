var gulp  = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function () {
  return gulp.src('javascripts/**.js')
    .pipe(babel())
    .pipe(gulp.dest('build/es2015'))
})