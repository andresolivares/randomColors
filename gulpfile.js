var gulp = require("gulp");
var sync = require("browser-sync");
var reload = sync.reload;
var jshint = require("gulp-jshint");

//Server
gulp.task("server", function () {
  sync({
    server: {
      baseDir: "./"
    }
  })
});

gulp.task("reload", function () {
  sync.reload();
});

//Hint
gulp.task("hint", function () {
  gulp.src("js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

//Default
gulp.task("default", ["hint", "server"], function () {
  gulp.watch("./js/*.js", ["hint", "reload"])
  gulp.watch("./*.html", ["reload"])
});
