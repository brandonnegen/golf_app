var express = require('express');
var app = express();
var index = require('./routes/index');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoURI = 'mongodb://localhost:27017/round_statistics';
var mongoDB = mongoose.connect(mongoURI).connection;
var Round = require('./models/round');
var track = require('./routes/track');
var Data = require('./routes/data');

mongoDB.on('error', function(err){
   if(err){
      console.log("Mongo Error: ", err);
   }
});

mongoDB.once('open', function(){
   console.log("Connected to MongoDB");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({expanded:true}));

app.use('/data', Data);

app.use('/track', track);

app.use('/', index);

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});

module.exports = app;