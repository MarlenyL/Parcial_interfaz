var express = require('express');
var router = express.Router();
var data = require('../controllers/characterController');

router.get('/', function(req, res, next) {
    res.render('index');
  })

module.exports = router;