var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
    res.render('index', { title: "ChatDental Demo", website: "http:/"+req.originalUrl });
});

module.exports = router;
