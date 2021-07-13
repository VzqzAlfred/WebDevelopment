const app = require('./app'),
    server = app.listen(app.get('port'), () => console.log(`Running at port ${app.get('port')}`))