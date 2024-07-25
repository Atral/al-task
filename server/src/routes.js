const Controller = require('./controllers/Controller')

module.exports = (app) => {
    app.get('/test/get', Controller.get);
}