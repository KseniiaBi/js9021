const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;
const image = require('gulp-image');
const cwebp = require('gulp-cwebp');
const webphtml = require('gulp-webp-for-html');
const htmlmin = require('gulp-htmlmin');
const critical = require('critical');
const browserSync = require('browser-sync').create();



// sass
// npm install sass gulp-sass --save-dev
gulp.task('buildStyles', function(cb) {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./prebuild/styles/'));
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
		.pipe(gulp.dest("./prebuild/js/"));
		cb();
});


// images compression
// npm install --save-dev gulp-image

gulp.task('images', (cb) => {
  gulp.src('./img/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true // defaults to false
    }))
    .pipe(cwebp())
    .pipe(gulp.dest('./prebuild/img/'));
    cb();
});

// webp images
// npm install --save-dev gulp-cwebp
// gulp.task('cwebp', function (cb) {
//   gulp.src('./img/*')
//     .pipe(cwebp())
//     .pipe(gulp.dest('./prebuild/img/'));
//     cb();
// });


// htmlmin
// npm i gulp-webp-for-html --save-dev
// npm install --save gulp-htmlmin

gulp.task('html',function(cb){
	gulp.src('*.html')
		.pipe(webphtml()) // здесь переписываются все img => picture 
    	.pipe(htmlmin({ collapseWhitespace: true })) // удаляем все пробелы и переносы строк в html
		.pipe(gulp.dest('./prebuild/'));
	cb();
});




// critical css
// npm i -D critical

gulp.task('critical', function (done) {
    critical.generate({
        inline: true,
        base: './',
        src: 'prebuild/index.html',
        target: 'prebuild/index.html',
        ignore: {
  		    atrule: ['@font-face'],
  		    rule: [/some-regexp/],
  		    decl: (node, value) => /big-image\.png/.test(value),
  		},
    });
    done();
});


// prebuild => build 
gulp.task('copy-files', function() {
    return gulp.src('./*.mp4')
    .pipe(gulp.dest('prebuild'));
    done();
});




gulp.task('moveto-dist', function() {
    return gulp.src('./prebuild/**/*')
    .pipe(gulp.dest('./dist/'));
    done();
});

// total build task

exports.prebuild = gulp.series('buildStyles', 'uglify', 'images', 'html', 'critical', 'copy-files');
exports.build = gulp.series('clean', prebuild, 'moveto-dist');



// watch + browsersync


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./styles/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./styles/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

// webp