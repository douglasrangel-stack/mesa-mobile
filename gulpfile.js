var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var jsmin = require("gulp-jsmin");
var concat = require("gulp-concat");
var sassGlob = require("gulp-sass-glob");

const AUTOPREFIXER_BROWSERS = [
    "last 2 version",

    "> 1%",

    "ie >= 9",

    "ie_mob >= 10",

    "ff >= 30",

    "chrome >= 34",

    "safari >= 7",

    "opera >= 23",

    "ios >= 7",

    "android >= 4",

    "bb >= 10",
];

function compileSass() {
    return gulp
        .src([
            "./node_modules/bootstrap/dist/css/bootstrap.css",
            "./dev/css/style.scss",
        ]) // Gets all files ending with .scss in app/scss
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(concat("style.js"))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("./sourcemaps/"))
        .pipe(gulp.dest("./src/assets/css/"));
}

gulp.task("sass", compileSass);

function compileJs() {
    return gulp
        .src([
            "./dev/js/**/*.js"
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("main.js"))
        .pipe(jsmin())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("./sourcemaps/"))
        .pipe(gulp.dest("./src/assets/js/"));
}

gulp.task("js", compileJs);

gulp.task("watch", function() {
    gulp.watch("dev/css/**/*.scss", compileSass);
    gulp.watch("dev/js/**/*.js", compileJs);
});

gulp.task("default", gulp.parallel("watch", "sass", "js"));