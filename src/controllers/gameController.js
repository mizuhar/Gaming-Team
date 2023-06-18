const routes = require("express").Router();
const gameManager = require('../managers/gameManagers');



routes.get('/create', (req, res)=>{
    res.render('create')
})
routes.post("/create", async (req, res) => {
    const { platform,name, image,price,genre,description } = req.body;
  
    const game = await gameManager.create({
      platform,
      name,
      image,
      price:Number(price),
      genre,
      description,
      owner: req.user._id,
    });
  
    res.redirect("/");
  });
routes.get('/search', (req, res)=>{
    res.render('search')
})
routes.get('/details', (req, res)=>{
    res.render('details')
})


module.exports = routes;