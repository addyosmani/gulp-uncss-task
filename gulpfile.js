var gulp = require('gulp');
var uncss = require('gulp-uncss-task');

gulp.task('default', function() {
    gulp.src('bootstrap.css')
        .pipe(uncss({
            html: ['index.html', 'contact.html', 'about.html'],
            compress: true
        }))
        .pipe(gulp.dest('dest'));
});