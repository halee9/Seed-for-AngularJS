'use strict';

var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Seed for High Square' });
});

module.exports = router;
