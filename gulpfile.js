
// Load plugins
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var jshint       = require('gulp-jshint');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var rename       = require('gulp-rename');
var concat       = require('gulp-concat');
var cache        = require('gulp-cache');
var browserify   = require('browserify');
var del          = require('del');
var notifier     = require('node-notifier');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');


// CSS Task
gulp.task('css', function() {
	return sass('src/scss/steeze.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 2 version'))
		.pipe(gulp.dest('assets/css/'))
		.pipe(rename({suffix: '-min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('assets/css/'))
});


// Lint JS
gulp.task('lint', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
});


// Build JS
gulp.task('js', function () {
	var b = browserify({
		entries: 'src/js/main.js',
		debug: true
	});

	return b.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulp.dest('assets/js/'))
		.pipe(rename({suffix: '-min'}))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
});


// Images
gulp.task('images', function() {
	return gulp.src('src/images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('assets/images/'))
});


// Copy HTML and font files
gulp.task('copy', function() {
	gulp.src('src/*.html').pipe(gulp.dest('assets/'));
	gulp.src('src/fonts/**').pipe(gulp.dest('assets/fonts/'));
	gulp.src('src/avatars/**').pipe(gulp.dest('assets/avatars/'));
});


// Clean out /assets/ directory
gulp.task('clean', function(cb) {
	del(['assets/**/*'], cb)
});


// Default task
gulp.task('default', ['clean'], function() {
	gulp.start('css', 'lint', 'js', 'images', 'copy');
	// notifier.notify({ title: 'Gulp', message: 'default task complete.' });
});


// Watch
gulp.task('watch', function() {
	// Watch .scss files
	gulp.watch('src/scss/**/*.scss', ['css']);
	// Watch .js files
	gulp.watch('src/js/**/*.js', ['lint', 'js']);
	// Watch image files
	gulp.watch('src/images/**/*', ['images']);

});
