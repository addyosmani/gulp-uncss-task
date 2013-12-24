'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var uncss = require('./index');

var html = '<html><head></head><body><h2>Foo Bar</h2></body></html>';
var html2 = '<html><head></head><body><h2>Foo Bar</h2><div id="extra"></div></body></html>'
var inlineCSS = 'h2 { font-size:1.5rem } p { font-size:1em } #extra { background: red }';
var compressed = 'h2{font-size:1.5rem}';
var ignored = 'h2{font-size:1.5rem}#extra{background:red}';

describe('gulp-uncss-task', function() {
    it('should generate a stylesheet with unused CSS removed', function(cb){
        this.timeout(9000);

        var stream = uncss({ html: html, compress: true });

        stream.on('data', function(file) {
            assert.equal(file.contents.toString(), compressed);
            cb();
        });

        stream.write(new gutil.File({
            contents: new Buffer(inlineCSS)
        }));

        stream.end();
    });

    it('should ignore selectors that are not to be removed by uncss', function(cb){
        this.timeout(9000);

        var stream = uncss({ 
            html: html2, 
            compress: true, 
            ignore: ['#extra', /test\-[0-9]+/] 
        });

        stream.on('data', function(file) {
            assert.equal(file.contents.toString(), ignored);
            cb();
        });

        stream.write(new gutil.File({
            contents: new Buffer(inlineCSS)
        }));

        stream.end();
    });
});
