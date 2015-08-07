/**
 * Created by metrokobe on 15/7/29. ----- alipay
 */
var gulp=require('gulp');
var less=require('gulp-less');
var mincss=require('gulp-minify-css');
var plumber=require('gulp-plumber');
var notify=require('gulp-notify');
var autoprefixer=require('gulp-autoprefixer');
var connect=require('gulp-connect');
// gulp less
gulp.task('testLess', function() {
  return gulp.src('./less/*.less')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(less())
    .pipe(gulp.dest('./css'));
});
gulp.task('testPrefixer',['testLess'],function(){
  return gulp.src('./css/*.css')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions','Firefox <= 20'],
      cascade: true, //是否美化属性值 默认：true 像这样：
      //-webkit-transform: rotate(45deg);
      //transform: rotate(45deg);
      remove:true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest('./css/'))
})
gulp.task('testCss',['testLess','testPrefixer'],function(){
  gulp.src('./css/*.css')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(mincss())
    .pipe(gulp.dest('./css/min/'));
})
//http-server
gulp.task('server', function() {
  // content
  connect.server({
    host:'localhost',
    port:8080
  });
});
gulp.task('testWatch',function(){
  gulp.watch('./less/*.less', ['testLess','testCss','testPrefixer']);
});

gulp.task('default',['testWatch','server']);





