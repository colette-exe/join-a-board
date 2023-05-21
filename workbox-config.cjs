module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,png,html,svg,json,mp3,md,jsx}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};