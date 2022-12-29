const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () => {
	browserSync.init({
		server: "./dist/"
	});
	gulp.watch("./dist/*.html").on('change', browserSync.reload);
})