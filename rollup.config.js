const babel = require('rollup-plugin-babel');
const less = require('rollup-plugin-less');
const resolve = require('rollup-plugin-node-resolve');

module.exports = {
	entry: 'src/app-layout/app-layout.js',
	external: ['incremental-dom'],
	globals: {
		'incremental-dom': 'IncrementalDOM'
	},
	plugins: [
		less({output: null}),
		resolve(),
		babel()
	],
	targets: [
		{
			dest: 'dist/app-bundle.js',
			format: 'iife',
			moduleName: 'IdxAdmin'
		}
	]
};
