var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-typescript-tsconfig';

function gulpTsConfigCompiler(){

    return through.obj(function(file, enc, cb){
        cb(null, file);
    });
}

module.exports = gulpTsConfigCompiler;
