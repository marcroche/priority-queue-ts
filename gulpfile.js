let gulp = require('gulp');
let typescript = require('gulp-typescript');
let gulpTsLint = require('gulp-tslint');
let tsLint = require('tslint');
let del = require('del');
let sourcemaps = require('gulp-sourcemaps');
let path = require('path');
let mocha = require('gulp-mocha');

let tsConfig = require('./tsconfig.json');
let paths = {
  dist: 'dist/',
};


gulp.task('clean', () => {
	return del([
	  paths.dist
	]).then(path => {
	  console.log('Deleted files and folders:\n', path.join('\n'));
	});
});

gulp.task('typescript', ['tslint', 'clean'], () => { //, 'unit'
  return gulp.src([
    'src/**/*.ts',
    '!src/**/*.spec.ts'
  ])
    .pipe(sourcemaps.init())
    .pipe(typescript(tsConfig.compilerOptions)).js
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(path.join(paths.dist, '')));
});

gulp.task('typescript-no-unit', ['tslint', 'clean'], () => {
  return gulp.src([
    'app/**/*.ts',
    '!app/**/*.spec.ts'
  ])
    .pipe(sourcemaps.init())
    .pipe(typescript(tsConfig.compilerOptions)).js
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(path.join(paths.dist, 'app')));
});

gulp.task('tslint', ['clean'], () => {
  let program = tsLint.Linter.createProgram('./tsconfig.json');

  return gulp.src('src/**/*.ts')
    .pipe(gulpTsLint({
      program
    }))
    .pipe(gulpTsLint.report());
});

gulp.task('unit', function(){
    return gulp.src('test/*.spec.ts')
        .pipe(mocha({
            reporter: 'nyan',
            require: ['ts-node/register']
        }));
  });
  

// gulp.task('unit', ['tslint'], (done) => {
//   new Server({
//     configFile: path.join(__dirname, 'karma.conf.js'),
//     // enable / disable watching file and executing tests whenever any file changes
//     autoWatch: false,
//     // start these browsers
//     // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//     browsers: ['ChromeHeadless'],
//     // Continuous Integration mode
//     // if true, Karma captures browsers, runs the tests and exits
//     singleRun: true,
//   }, done).start();
// });