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
var flatten = require('gulp-flatten');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

let paths = {
    dist: 'dist/',
};

gulp.task('clean', () => {
    return del([
        paths.dist
    ]);
});

gulp.task('tsc', ['typedefinitions', 'unit', 'tslint'], () => {
    return gulp.src([
        'src/**/*.ts',
        '!src/**/*.spec.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(typescript(tsConfig.compilerOptions)).js
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
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

gulp.task('unit', ['tslint', 'clean'], function () {
    return gulp.src('test/*.spec.ts')
        .pipe(mocha({
            reporter: 'nyan',
            require: ['ts-node/register']
        }));
});

gulp.task('typedefinitions', ['clean', 'tslint', 'unit'], () => {
    return gulp.src('src/**/*.d.ts')
        .pipe(flatten())
        .pipe(rename('index.d.ts'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['tsc']);
