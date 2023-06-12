const router = require("express").Router();




router.get('/404', (req, res) => {
    res.render('404');
});
router.get('/search', (req, res) => {
    res.render('search');
});

module.exports = router;