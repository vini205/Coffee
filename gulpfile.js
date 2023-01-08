const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () => {
	browserSync.init({
		server: "./"
	});
	gulp.watch("./dist/*.html").on('change', browserSync.reload);
	gulp.watch("./dist/*.css").on('change', browserSync.reload);
})