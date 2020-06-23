const connect = require('gulp-connect');
const { watchHTML} = require('./tasks/html');
const {watchSCSS} = require('./tasks/scss');
const {watchJS} = require('./tasks/js');
const {watchIMG} = require('./tasks/image');

function dev(done){
    watchHTML();
    watchSCSS();
    watchJS();
    watchIMG();
    connect.server({
        livereload: true,
        port: 3000,
        root: "tmp"
    })
    done();
}

exports.default = dev;