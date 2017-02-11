'use strict';

var fs = require('fs');
var path = require('path');
var wiredep = require('wiredep');

exports.formatPath = function (filepath){
    if (process.platform === 'win32') {
        filepath = filepath.replace(/\\/g, '/');
    }
    return filepath;
}

exports.formatPathReverse = function (filepath){
    if (process.platform === 'win32') {
        filepath = filepath.replace(/\//g, '\\');
    }
    return filepath;
}

exports.findShortPath = function (filepath){
    var dirname = path.dirname(filepath);
    var basename = path.basename(filepath);
    filepath = dirname.replace(/\\src|\\app/, '')
        .replace(exports.formatPathReverse('/img'), '')
        .replace(exports.formatPathReverse('/Resources/public'), '')
        .replace(exports.formatPathReverse('/sources'), exports.formatPathReverse('/sources/img'))
        .replace(/(\w+)Bundle/, '$1')
        .toLowerCase();

    return path.join(filepath, basename);
}

exports.guessExt = function (file){
    return file.slice(-4) === '.css' ? 'css' : 'js';
}

exports.confPaths = function (){
    var array = [];
    var paths = JSON.parse(fs.readFileSync('./gulp_conf/conf.inject.json'));
    for (var i in paths) {
        array = array.concat(paths[i].css.vendor)
        .concat(paths[i].javascript.vendor)
        .concat(paths[i].css.app)
        .concat(paths[i].javascript.app)
        .concat(paths[i].javascript.head);
    }
    return array;
}

exports.destFilePath = function (filepath, ext){
    var destFilePath = path.join(path.resolve(), exports.formatPathReverse('/web/sources/'), path.relative(path.resolve(),filepath));
    if(ext != null){
        destFilePath = destFilePath.replace(path.extname(destFilePath), '.'+ext);
    }
    return destFilePath;
}

exports.wiredepPath = function(){
    var files = [];
    if(wiredep().css)
        files = files.concat(wiredep().css);
    if(wiredep().js)
        files = files.concat(wiredep().js);  

    return files;
}