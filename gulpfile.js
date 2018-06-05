/*eslint-env node*/
const gulp = require('gulp');
const bs1 = require("browser-sync").create();
const bs2 = require("browser-sync").create();
const eslint = require('gulp-eslint');
///const sourcemaps = require('gulp-sourcemaps');
//const jasmine = require('gulp-jasmine');
//const browserify = require('gulp-browserify');

gulp.task('default', [/*'scripts',*/ 'lint'], () =>  {
	gulp.watch("*.html").on('change', bs1.reload);
	gulp.watch("js-dev/*.js").on('change', bs1.reload);
	gulp.watch("*.html").on('change', bs2.reload);
	gulp.watch("js-dev/*.js").on('change', bs2.reload);
	gulp.watch('js-dev/*.js', [/*'scripts', */'lint']);
	gulp.watch('spec/EPositionSpec.js').on('change', bs1.reload);
	gulp.watch('spec/EPositionSpec.js').on('change', bs2.reload);

	bs1.init({
		server: "./",
		port: 3000,
		index: "index.html",
		ui: false

	});
	bs2.init({
		server: "./",
		port: 8080,
		index: "SpecRunner.html",
		ui: false
	});
});

// when ready for distribution run this to
// write the js files into the js folder
/*gulp.task('scripts', () => {
	gulp.src('js-dev/*.js')
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('js'));
});
*/
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

// tests on nodejs terminal
/*gulp.task('tests', () =>  {
	gulp.src('spec/**Spec.js')
		.pipe(jasmine());
});
*/


// Static Server + watching scss/html files
/*gulp.task('serve', function() {
	browserSync.init({
		server: "./app"
	});
});
*/
