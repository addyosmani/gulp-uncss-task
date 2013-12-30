'use strict';
var es = require('event-stream');
var uncss = require('uncss');

module.exports = function() {
    var args = arguments;
    var input = args[0].html;
    var options = {};

    options.csspath = args[0].csspath;
    options.stylesheets = args[0].stylesheets;
    options.ignore = args[0].ignore;
    options.timeout = args[0].timeout;

    return es.map(function(file, cb){
        options.raw = String(file.contents);
        uncss(input, options, function(output){
            file.contents = new Buffer(output);
            cb(null, file);
        });
    });
};
