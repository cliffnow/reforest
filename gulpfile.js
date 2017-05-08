var gulp = require('gulp');
var uncss = require('gulp-uncss');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');

gulp.watch('scss/*.scss', ['default']);

gulp.task('default', function() {


  return gulp.src('scss/styles.scss')

  .pipe(sass())
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))

  // .pipe(uncss({
  //   html: ['www/*.html', 'www/**/*.html'],
  //   ignore: [
  //      /\.fade/,
  //     /\.modal/,
  //     '.affix',
  //     /\.tooltip/,
  //     /\.popover/,
  //     /\.collaps/,
  //     /\.carousel-inner/,
  //     /\.open/  ],
  //   timeout: 7000
  //   }))
  .pipe(nano())
  .pipe(rename(function (path) { path.basename += ".min"; }))
  .pipe(gulp.dest('css'));
});
