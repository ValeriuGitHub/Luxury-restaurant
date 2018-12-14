module.exports = function () {
	$.gulp.task('scripts', function () {
		return $.gulp.src('src/js/**/*.js')
			.pipe($.gp.babel({
	            presets: ['@babel/env']
	        }))
			.pipe($.gp.concat('main.js'))
			.pipe($.gp.uglify())
			.pipe($.gulp.dest('build'))
	})
}