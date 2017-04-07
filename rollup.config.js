const babel = require('rollup-plugin-babel');
const join = require('path').join;
const less = require('rollup-plugin-less');
const resolve = require('rollup-plugin-node-resolve');
const root = process.cwd();

module.exports = {
	entry: join(root, 'app', 'app-router', 'app-router.js'),
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
			dest: join(root, 'public', 'bundle.js'),
			format: 'iife',
			moduleName: 'M7Temple'
		}
	]
};
