gulp-uncss-task
===============

> A Gulp task for removing unused CSS

This is a Gulp compliment to `grunt-uncss`. 

*Issues with the output should be reported on the [UnCSS](https://github.com/giakki/uncss/issues) issue tracker.*

## Install

Install with [npm](https://npmjs.org/package/gulp-uncss-task)

```
npm install --save-dev gulp-uncss-task
```

## Usage

```js
var gulp = require('gulp');
var uncss = require('gulp-uncss-task');

gulp.task('default', function() {
    gulp.src('bootstrap.css')
        .pipe(uncss({
            html: ['index.html', 'contact.html', 'about.html']
        }))
        .pipe(gulp.dest('dest'));
});
```

## Options

Sample use of all supported options:

```
ignore: ['#added_at_runtime', /test\-[0-9]+/],
csspath: "../public/css/",
raw: 'h1 { color: green }',
stylesheets: ["lib/bootstrap/dist/css/bootstrap.css", "src/public/css/main.css"],
timeout: 1000
```

### What do the options do?

- __ignore__ [Array]: provide a list of selectors that should not be removed by UnCSS. For example, styles added by user interaction with the page (hover, click), since those are not detectable by UnCSS yet. Both literal names and regex patterns are recognized.
- __csspath__ [String]: Path where the CSS files are related to the html files. By default, UnCSS uses the path specified in the `<link rel="stylesheet" href="path/to/file.css"\>`
- __stylesheets__ [Array]: Force the list of stylesheets to optimize using a path relative to the `gulpfile.js`. Otherwise, it extracts the stylesheets from the html files.
- __raw__ [String]: Give the task a raw string of CSS in addition to the existing stylesheet options; useful in scripting when your CSS hasn't yet been written to disk.
- __timeout__ [Number]: Specify how long to wait for the JS to be loaded.

## License

MIT © [Addy Osmani](http://addyosmani.com)
