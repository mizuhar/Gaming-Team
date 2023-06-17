const routes = require("express").Router();
const userManager = require('../managers/userManagers');
const {TOKEN_KEY} = require('../config/config');
const {getErrorMessages} = require('../utils/errorHelpers');



routes.get("/register", (req, res) => {
    res.render("users/register");
  });
routes.post("/register",async (req, res) => {
    const { username,email, password, repeatPassword } = req.body;
    try {
      const token =  await userManager.register({ username,email, password, repeatPassword });
     res.cookie(TOKEN_KEY,token);
      res.redirect("/");
    } catch (err) {
      res.render('users/register',{error: getErrorMessages(err),username,email});
    }
  })

  routes.get("/login", (req, res) => {
    res.render("users/login");
  });
  routes.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
    const token = await userManager.login( email, password );
    res.cookie(TOKEN_KEY,token)
    res.redirect("/");
    } catch (err) {res.render('users/login',{error: getErrorMessages(err)});}
  });



module.exports = routes;