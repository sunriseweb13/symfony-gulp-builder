'use strict';

var gulp = require('gulp');
var conf = require('../gulp_conf/conf');

gulp.task('css', function () {
    return gulp.src(conf.assets.styles['css'])
        .pipe(gulp.dest('./web/sources'));
});