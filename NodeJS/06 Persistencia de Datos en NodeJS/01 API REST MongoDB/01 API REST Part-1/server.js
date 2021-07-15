const app = require('./app'),
	server = app.listen(app.get('port'), () => {
		console.log(`Server running at port ${app.get('port')}`)
	});