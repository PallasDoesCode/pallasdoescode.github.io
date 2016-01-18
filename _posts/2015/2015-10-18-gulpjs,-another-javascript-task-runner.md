---
layout: article
title: "GulpJS, another JavaScript Task Runner"
date: 2015-10-18 01:53:22
comments: true
categories: [front-end, web development]
---

###What is Gulp?

A while back I talked about Grunt, a JavaScript task runner, designed to make your life easier by automating development tasks. Today, I will be introducing another JavaScript task runner named Gulp. Like Grunt, Gulp is also developed using JavaScript via Node.js.

###How is it different from Grunt?

The main difference between these two task runners is in how they perform the tasks. Grunt uses a standard I/O operation to read in files then output the information. When executed Grunt will complete its tasks in sequential order. Gulp on the other hand uses streams to perform it’s I/O operation passing information to the next file, creating a link or chain. Since Gulp uses streams for its I/O work it can run multiple tasks at the same time.

###How to install Gulp?

Just like when we installed Grunt, we can also install Gulp with a single command. Simply open your NPM console window and navigate to your project’s folder. Then, type the following command to install Gulp as a project dependency.

```javascript
npm install gulp --save-dev
```

###Working with Gulp

Remember a grunt file is just a set of configurations determined by you. Gulp, as you’re about to see, is just code. Most of the tasks you’ll write are going to be simple and will perform a single task. To get started you will need to know 5 functions. These include the task, run, watch, src, and dest functions. The task function is where all you put your code for the current task you’re wanting to accomplish. It simply, registers your task function with the name you’ve given it. Below is an example of the task function in action. The task as you can see is called lint.

```javascript
gulp.task(“lint”, function() {}
```

Second is the run task, which allows you to run a task by passing the name of the task you wish to execute as an argument. For example gulp.run(“lint”); will run the lint task. However, when Gulp v4 is released this task will be deprecated.Third is the watch function, which accepts two arguments. The first is the file(s) that are to be monitored by the task. The second is an array containing the names of one or more tasks. When one of the monitored files is changed the task then runs the tasks listed in the second argument.Fourth is the src function, which accept a single argument containing a list of file(s)/folder paths. This list represents the file(s) that will be monitored/altered in the task. The argument’s value is piped to the another stream.Last, there is the dest function. Much like the src function, the dest function also takes a single argument containing a list of file(s)/folder paths. Anything passed to this function is saved to the file system.

###A practical example of a gulp file

Below is the gulp file I made for the bootstrap-wysiwyg project. In it you can find each of the functions I’ve talked about. I highly recommend you try out Gulp for yourself. As you can see here it’s easy to get started and not complicated to use.

```javascript
// Include gulp
var gulp = require('gulp');

// Include our plugins
var jshint = require('gulp-jshint');
var bootlint = require('gulp-bootlint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var html5lint = require('gulp-html5-lint');
var checkPages = require('check-pages')

// Default task
gulp.task('default', ['js', 'html', 'bootstrap', 'links', 'minify']);

// Lint our JavaScript files
gulp.task('js', function () {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('html', function () {
    return gulp.src(['*.html', 'examples/*.html'])
        .pipe(html5lint());
});

// Lint our Bootstrap files
gulp.task('bootstrap', function () {
    return gulp.src(['*.html', 'examples/**/*.html'])
        .pipe(bootlint());
});

// Check for broken and invalid links in the web pages
gulp.task('links', function (callback) {
    var options = {
        pageUrls: [
            'index.html',
            'examples/basic.html',
            'examples/clear-formatting.html',
            'examples/events.html',
            'examples/form-post.html',
            'examples/formatblock-example.html',
            'examples/html-editor.html',
            'examples/multiple-editors.html',
            'examples/simple-toolbar.html'
        ],
        checkLinks: true
        summary: true
    };

    checkPages(console, options, callback);
});

// Minify our JS
gulp.task('minify', function () {
    return gulp.src('src/*.js')
        pipe(uglify())
        .pipe(rename('bootstrap-wysiwyg.min.js'))
        .pipe(gulp.dest('js'));});

// Watch files for changes
gulp.task('watch', function () {>
    gulp.watch(['src/*.js', 'index.html', 'examples/*.html'], ['js', 'html', 'bootstrap', 'links', 'minify']);
});
```
