var express = require('express');
var router = express.Router();
var Round = require('../models/round');

router.post('/', function(req, res, next){
    Round.create(req.body, function(err, post){
        console.log("in the router post", req.body);
        if(err)
            next(err);
        else
            res.redirect('../assets/views/index.html');
    });
});

router.get('/', function(req, res, next){
   Round.find(function(err, round){
       res.json(round);
   })
});

module.exports = router;