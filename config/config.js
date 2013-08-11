module.exports = {
	root: require('path').normalize(__dirname + '/..'),
	app: {
		name: 'musterup'
	},
	port: 3000,
	db: 'mongodb://localhost/musterup'
};
