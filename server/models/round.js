var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoundSchema = new Schema({
   areaOne: {type: String},
    areaTwo: {type: String},
    areaThree: {type: String},
    areaFour: {type: String},
    areaFive: {type: String},
    areaSix: {type: String},
    areaSeven: {type: String},
    areaEight: {type: String},
    areaNine: {type: String},
    scoreOne: {type: Number},
    scoreTwo: {type: Number},
    scoreThree: {type: Number},
    scoreFour: {type: Number},
    scoreFive: {type: Number},
    scoreSix: {type: Number},
    scoreSeven: {type: Number},
    scoreEight: {type: Number},
    scoreNine: {type: Number},
    scoreTotal: {type: Number},
    puttsOne: {type: Number},
    puttsTwo: {type: Number},
    puttsThree: {type: Number},
    puttsFour: {type: Number},
    puttsFive: {type: Number},
    puttsSix: {type: Number},
    puttsSeven: {type: Number},
    puttsEight: {type: Number},
    puttsNine: {type: Number},
    puttsTotal: {type: Number},
    holesPlayed: {type: Number},
    //date: {type: new Date()}
});

module.exports = mongoose.model("Round", RoundSchema);