const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', ()=>
    gulp.src('output/custom.css')
        .pipe(autoprefixer({
            browsers: ['last 99 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('output'))
);

gulp.task('taskname', function(cb){
    console.log('\nHello world!\n');
    cb();
});