//开启静态服务器
var gulp        = require('gulp');
var browserSync = require('browser-sync');//静态服务器的插件
var mock        = require('./mock.js');//自己将拦截，生成随机数据这一模块提取出去了



gulp.task('sync', function () {

    var files = [
        '**/*.html',
        './img/*',
        './css/*.css',
        './js/*.js'
    ];
    //files是一个数组，在开启静态服务器的时候讲数据传进去能够监控文件的变化，就不用在写gulp.watch任务了,如果文件改动了，浏览器将自动刷新
    browserSync.init({
        server: {
            baseDir: './src',
                port: 3000,
                middleware:mock.data()
        },
        startPath:'src/'
    });
});