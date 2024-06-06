const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

// Task to compile SCSS to CSS
function compileSass() {
  return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'));
}

// Task to concatenate JS files
function scripts() {
  return src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(dest('dist/js'));
}

// Task to watch for changes in SCSS and JS files
function watchFiles() {
  watch('src/scss/**/*.scss', compileSass);
  watch('src/js/**/*.js', scripts);
}

// Default task
exports.default = series(compileSass, scripts, watchFiles);
