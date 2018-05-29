/*eslint-env node*/
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const sourcemaps = (require('gulp-sourcemaps'));

gulp.task('default', ['scripts', 'lint'], () =>  {
	gulp.watch("index.html").on('change', browserSync.reload);
	gulp.watch("js-dev/*.js").on('change', browserSync.reload);
	gulp.watch('js-dev/*.js', ['scripts', 'lint']);

	browserSync.init({
		server: "./"
	});
});

gulp.task('scripts', () => {
	gulp.src('js-dev/*.js')
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('js'));
});

gulp.task('lint', () => {
	// ESLint ignores files with "node_modules" paths.
	// So, it's best to have gulp ignore the directory as well.
	// Also, Be sure to return the stream from the task;
	// Otherwise, the task may end before the stream has finished.
	return gulp.src(['app/js/*.js', '!/app/**/*.min.js', '!node_modules/**'])
	// eslint() attaches the lint output to the "eslint" property
	// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failAfterError last.
		.pipe(eslint.failAfterError());
});

// Static Server + watching scss/html files
/*gulp.task('serve', function() {
	browserSync.init({
		server: "./app"
	});
});
*/
