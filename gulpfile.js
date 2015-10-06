/**
 * Created by sriram on 6/10/15.
 */

var gulp = require('gulp');
var webserve = require('./webpack-config');

gulp.task('serve', function() {
    webserve.server.listen(8080, "localhost", function() {});
});
