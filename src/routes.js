const routes = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');

routes.use(homeController)
routes.use('/search',homeController)
routes.use('/users',userController)

routes.get('*',(req,res)=>{
    res.redirect('/404')
})


module.exports = routes;