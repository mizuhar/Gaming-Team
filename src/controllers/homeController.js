const routes = require("express").Router();




routes.get('/404', (req, res) => {
    res.render('404');
});
routes.get('/catalog', (req, res) => {
    res.render('index');})
routes.get('/', (req, res) => {
    res.render('home');
});

module.exports = routes;