const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
// const htmlmin = require('gulp-htmlmin');
// const crittr = require('gulp-crittr');
// const imgs = require('/gulp_img');


// sass
// npm install sass gulp-sass --save-dev
gulp.task('buildStyles', function(cb) {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/prebuild/styles/'));
    cb();
});

 
// jsmin
// npm install --save-dev gulp-uglify-es
// npm install gulp-rename
gulp.task("uglify", function (cb) {
	return gulp.src("js/*.js")
		.pipe(rename({
	         suffix: '.min'
	      }))
		.pipe(uglify(/* options */))
		.pipe(gulp.dest("dist/prebuild/js/"));
		cb();
});


// images compression
// npm install --save-dev gulp-imagemin

gulp.task('images', (done) =>{
    return gulp.src('./img/**/*.{gif,png,jpg,svg,webp}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 79,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('dist/prebuild/img/'));
    done();
});

// // htmlmin
// // npm install --save gulp-htmlmin

// gulp.task('htmlmin', (cb) => {
//   return gulp.src('./*.html')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest('dist/'));
//     cb();const htmlmin = require('gulp-htmlmin');
// });



// // critical css
// // npm i gulp-crittr --save-dev

// gulp.task('crittr', () => {
// 	return gulp.src('dist/prebuild/styles/main.css')
// 		.pipe(crittr({
// 			out: 'main.css',
// 			urls: [
// 				'http://localhost:8888',
// 				'http://localhost:8888/product/list/',
// 				'http://localhost:8888/product/view',
// 				'http://localhost:8888/landing/page',
// 			],
// 			width: 1360,
// 			height: 900
// 		}))
// 		.pipe(gulp.dest('dist/styles/'));
// });



// // total build task

// exports.build = gulp.series(buildStyles, 'compress', 'imagemin', 'htmlmin', 'crittr');


// prebuild => build delete build
// dist clean up every time


// watch + browsersync

// webp