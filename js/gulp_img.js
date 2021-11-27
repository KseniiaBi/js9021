import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

module.exports.imgs= () => (
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);