const gulp = require('gulp')
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const uglify      = require('gulp-uglify');

gulp.task('default', ['watch']) //watch is a dependant task and runs first!

gulp.task('watch', () =>{
  gulp.watch(['scss/*.scss','scss/*.css'], ['build-sass']);
  gulp.watch(['components/*','client.js'], ['build-client','build-components'])
  gulp.watch(['server.js','routes.js'], ['build-server','build-components'])
  gulp.watch(['views/*'], ['build-views'])
})

gulp.task('build-sass', function(){
  return gulp.src('scss/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/static/css'))
})

gulp.task('build-client',function(){
  return browserify('client.js')
      .transform("babelify", {
        "presets": [
          "env",
          "react"
        ],
        "plugins": [
          "transform-react-jsx",
          "transform-class-properties"
        ]
      })
      .bundle()
      .pipe(source('bundle.js'))
      // .pipe(buffer())
      // .pipe(sourcemaps.init())
      // .pipe(uglify())
      // .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/static/js'))
})

gulp.task('build-server',function(){
  return gulp.src(['server.js','routes.js'])
        .pipe(babel({
          "presets": [
            "env",
            "react"
          ],
          "plugins": [
            "transform-react-jsx",
            "transform-class-properties"
          ]
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('build-components',function(){
  return gulp.src(['components/*'])
        .pipe(babel({
          "presets": [
            "env",
            "react"
          ],
          "plugins": [
            "transform-react-jsx",
            "transform-class-properties"
          ]
        }))
        .pipe(gulp.dest('dist/components'))
})

gulp.task('build-views',function(){
  return gulp.src(['views/*'])
        .pipe(gulp.dest('dist/views'))
})

gulp.task('build',['build-client','build-server','build-components','build-sass'])
