var express = require('express');
var router = express.Router();
var path = require('path');
var Round = require('../models/round');

router.get('/', function(req, res, next){
   res.sendFile(path.join(__dirname, '../public/assets/views/index.html'));
});



module.exports = router;