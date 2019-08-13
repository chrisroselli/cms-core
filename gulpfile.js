let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
 
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
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
  .pipe(rename({
      basename: 'main-styles',
      suffix: '.min',
  }))
  .pipe(gulp.dest('dist/styles/'))
 
 
  .pipe(gulp.dest('dist'));
}

const build = gulp.series(minifycss);
exports.default = build;
