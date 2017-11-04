let gulp = require('gulp');
let gutil = require('gulp-util');
let typescript = require('gulp-typescript');
let gulpTsLint = require('gulp-tslint');
let tsLint = require('tslint');
let del = require('del');
let sourcemaps = require('gulp-sourcemaps');
let path = require('path');
let mocha = require('gulp-mocha');
let tsConfig = require('./tsconfig.json');
let coveralls = require('gulp-coveralls');
let istanbul = require('gulp-istanbul');

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

gulp.task('tsc', ['tslint', 'clean', 'unit'], () => {
    return gulp.src([
        'src/**/*.ts',
        '!src/**/*.spec.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(typescript(tsConfig.compilerOptions)).js
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path.join(paths.dist, '')));
});

gulp.task('tsc-no-unit', ['tslint', 'clean'], () => {
    return gulp.src([
        'src/**/*.ts',
        '!src/**/*.spec.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(typescript(tsConfig.compilerOptions)).js
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(path.join(paths.dist, '')));
});

gulp.task('tslint', ['clean'], () => {
    let program = tsLint.Linter.createProgram('./tsconfig.json');

    return gulp.src('src/**/*.ts')
        .pipe(gulpTsLint({
            program
        }))
        .pipe(gulpTsLint.report());
});

gulp.task('unit', function () {
    return gulp.src('test/*.spec.ts')
        .pipe(mocha({
            reporter: 'nyan',
            require: ['ts-node/register']
        }));
        // .pipe(istanbul.writeReports());
});

gulp.task('pre-unit', function () {
    return gulp.src('test/**/*.spec.ts')
        .pipe(istanbul())
        .pipe(istanbul.hookRequire());
});

gulp.task('coverage', function () {
    return gulp.src('coverage/lcov.info')
        .pipe(coveralls());
});

gulp.task('default', ['tsc']);
