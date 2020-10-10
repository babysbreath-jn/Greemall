const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

gulp.task("css",function(){
    return gulp.src("css/*.css")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("images", function(){
    return gulp.src("images/*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
gulp.task("iconfont",function(){
    return gulp.src("iconfont/*")
    .pipe(gulp.dest("dist/iconfont"))
    .pipe(connect.reload());
})

gulp.task("script",function(){
    return gulp.src("js/*")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

gulp.task("data",function(){
    return gulp.src("*.json")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

gulp.task("build", ["copy-html", "images", "script", "data"], function(){
    console.log("项目建立成功");
})

gulp.task("watch",function(){
    gulp.watch("*.html", ['copy-html']);
    gulp.watch("css/*.css",['css']);
    gulp.watch("images/*.{jpg,png}",['images']);
    gulp.watch("iconfont/*",['iconfont']);
    gulp.watch("js/*",['script']);
    gulp.watch("*.json",['data']);
})

const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload:true
    })
})

gulp.task("default", ["watch", "server"]);