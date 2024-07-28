const WikipediaController = require('./controllers/WikipediaController')

module.exports = (app) => {
    app.post('/wikipedia/get-page-data', WikipediaController.getPageData);
}