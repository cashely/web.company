var gulp = require('gulp');

//压缩css
var miniCss = require('gulp-minify-css');
//压缩js

var miniJs = require('gulp-uglify'); 
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var prefixer = require('gulp-autoprefixer');
gulp.task('miniJs',function(){
    gulp.src('src/js/*.js')
        .pipe(miniJs())
        .pipe(rename(function (path) {
            path.basename += '.min'
        }))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('miniCss',function(){
    gulp.src('src/style/*.css')
        .pipe(prefixer({ browsers: ['> 1%', 'IE 8'], cascade: false }))
        .pipe(concatCss('common.css'))
        .pipe(miniCss())
        .pipe(rename(function(path){
            path.basename +='.min'
        }))
        .pipe(gulp.dest('dist/style'));
});
gulp.task('minimage',function(){
    gulp.src('src/images/*')
        .pipe(imagemin({
            progressive:true,
            use:[pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
})
gulp.task('default',['miniJs','miniCss','minimage']);
//gulp.task('default',['miniJs','miniCss']);