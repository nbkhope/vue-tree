var config = require('./webpack.config.js');

config.entry = {
	'vue-tree': './src/index.js'
}

config.output = {
	filename: './dist/[name].js',
	library: 'VueTree',
	libraryTarget: 'umd'
}

module.exports = config;
