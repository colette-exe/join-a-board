module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,json,mp3,png,svg,md,css,jsx,js,cjs}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};