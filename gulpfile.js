var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var wiredep = require('wiredep').stream;
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var removeCode = require('gulp-remove-code');

var js = [
    './bower_components/angular/angular.min.js',
    './bower_components/angular-mocks/angular-mocks.js',
    './app/controllers/controller.js'
];

gulp.task('inject', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['./app/**/*.js', './styles/*.css'], { read: false });

    return target.pipe(inject(sources))
        .pipe(wiredep())
        .pipe(gulp.dest('./'));
});


gulp.task('inject-build', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['./dist/script.min.js', './dist/*.css'], { read: false });

    return target.pipe(inject(sources))
        .pipe(removeCode({ production: true }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-js', function () {
    uglify();
    gulp.src(js)
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('build', ['minify-js', 'minify-css', 'inject-build']);
gulp.task('server', ['inject', 'connect']);

gulp.task('connect', function () {
    connect.server({
        port: 3000
    });

});


gulp.task('watch', function () {
    gulp.watch(js, ['minify-js']);
});