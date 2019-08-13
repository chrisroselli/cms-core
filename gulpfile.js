let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
 
 function minifycss() {
  return gulp.src('css/modules/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('dist'));
 }


const build = gulp.series(minifycss);
exports.default = build;
