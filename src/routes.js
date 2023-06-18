const routes = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');


routes.use(homeController)

routes.use('/users',userController)
routes.use('/games',gameController)

//routes.get('*',(req,res)=>{
    //res.redirect('/404')
//})


module.exports = routes;