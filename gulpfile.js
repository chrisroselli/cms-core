let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let  babel = require("gulp-babel");

function minifycss() {
  return gulp.src('css/modules/*.css')
  .pipe(cleanCSS({
      debug: true,
      compatibility: 'ie8',
      level: {
          1: {
              specialComments: 0,
          },
      },
  }))

 
  .pipe(gulp.dest('dist/styles/'))
 
 
  .pipe(gulp.dest('dist'));
}

function babeljs() {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
}

const build = gulp.series(minifycss,babeljs);
exports.default = build;
