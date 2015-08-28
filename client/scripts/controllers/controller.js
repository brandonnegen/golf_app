var homeApp = angular.module('homeApp');

homeApp.controller("StatController", ["$scope", "$http", function($scope, $http){
    console.log("Stat is working");
    $scope.round = {};
    $scope.rounds = [];

    $scope.getAverage = function(){
        $http.get('/data').then(function(response){
            $scope.round = {};
            $scope.rounds = response.data;
            $scope.sum = 0;
            for(var i = 0; i < response.data.length; i++){
                console.log("date", response.data[i].date);
                $scope.sum += response.data[i].scoreTotal;
                $scope.total = $scope.sum/response.data.length;
            }
        })
    };
    $scope.getPutts = function(){
      $http.get('/data').then(function(response){
          $scope.round = {};
          $scope.rounds = response.data;
          $scope.totalHoles = 0;
          $scope.totalPutts = 0;
          $scope.puttAverage = 0;
          for(var i = 0; i < response.data.length; i++){
              $scope.totalHoles += response.data[i].holesPlayed;
              $scope.totalPutts += response.data[i].puttsTotal;
              $scope.puttAverage = ($scope.totalPutts/$scope.totalHoles).toFixed(1);
          }
      })
    };
    $scope.getAccuracy = function(){
      $http.get('/data').then(function(response){
          $scope.round = {};
          $scope.rounds = response.data;
          $scope.totalHoles = 0;
          $scope.shotsLeft = 0;
          $scope.percentageLeft = 0;
          $scope.shotsCenter = 0;
          $scope.percentageCenter = 0;
          $scope.shotsRight = 0;
          $scope.percentageRight = 0;
          for(var i = 0; i < response.data.length; i++){
              if(response.data[i].areaOne == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaOne == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaOne == "Right"){
                  $scope.shotsRight++;
              }
              if(response.data[i].areaTwo == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaTwo == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaTwo == "Right"){
                  $scope.shotsRight++;
              }
              if(response.data[i].areaThree == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaThree == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaThree == "Right"){
                  $scope.shotsRight++;
              }
              if(response.data[i].areaFour == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaFour == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaFour == "Right"){
                  $scope.shotsRight++;
              }
              if(response.data[i].areaFive == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaFive == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaFive == "Right"){
                  $scope.shotsRight++;
              }
              if(response.data[i].areaSix == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaSix == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaSix == "Right"){
                  $scope.shotsRight++;
              }
              if(response.data[i].areaSeven == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaSeven == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaSeven == "Right"){
                  $scope.shotsRight++;
              }
              if(response.data[i].areaEight == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaEight == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaEight == "Right"){
                  $scope.shotsRight++;
              }
              if(response.data[i].areaNine == "Left"){
                  $scope.shotsLeft++;
              } else if(response.data[i].areaNine == "Center"){
                  $scope.shotsCenter++;
              } else if(response.data[i].areaNine == "Right"){
                  $scope.shotsRight++;
              }
              $scope.totalHoles += response.data[i].holesPlayed;
              $scope.percentageLeft = Math.round(($scope.shotsLeft/$scope.totalHoles) * 100);
              $scope.percentageCenter = Math.round(($scope.shotsCenter/$scope.totalHoles) * 100);
              $scope.percentageRight = Math.round(($scope.shotsRight/$scope.totalHoles) * 100);
          }
      })
    };
    $scope.getScores = function(){
      $http.get('/data').then(function(response){
          $scope.round = {};
          $scope.rounds = response.data;
          $scope.parOne = 5;
          $scope.parTwo = 5;
          $scope.parThree = 3;
          $scope.parFour = 4;
          $scope.parFive = 4;
          $scope.parSix = 4;
          $scope.parSeven = 5;
          $scope.parEight = 3;
          $scope.parNine = 4;
          $scope.doubleEagles = 0;
          $scope.eagles = 0;
          $scope.birdies = 0;
          $scope.pars = 0;
          $scope.bogeys = 0;
          $scope.doubleBogeys = 0;
          $scope.overDouble = 0;
          for(var i = 0; i < response.data.length; i++){
                if(response.data[i].scoreOne == $scope.parOne - 3){
                    $scope.doubleEagles++;
                } else if(response.data[i].scoreOne == $scope.parOne - 2){
                    $scope.eagles++;
                } else if(response.data[i].scoreOne == $scope.parOne -1){
                    $scope.birdies++;
                } else if(response.data[i].scoreOne == $scope.parOne){
                    $scope.pars++;
                } else if(response.data[i].scoreOne == $scope.parOne + 1){
                    $scope.bogeys++;
                } else if(response.data[i].scoreOne == $scope.parOne + 2){
                    $scope.doubleBogeys++;
                }
              if(response.data[i].scoreTwo == $scope.parTwo - 3){
                  $scope.doubleEagles++;
              } else if(response.data[i].scoreTwo == $scope.parTwo - 2){
                  $scope.eagles++;
              } else if(response.data[i].scoreTwo == $scope.parTwo -1){
                  $scope.birdies++;
              } else if(response.data[i].scoreTwo == $scope.parTwo){
                  $scope.pars++;
              } else if(response.data[i].scoreTwo == $scope.parTwo + 1){
                  $scope.bogeys++;
              } else if(response.data[i].scoreTwo == $scope.parTwo + 2){
                  $scope.doubleBogeys++;
              }
              if(response.data[i].scoreThree == $scope.parThree - 3){
                  $scope.doubleEagles++;
              } else if(response.data[i].scoreThree == $scope.parThree - 2){
                  $scope.eagles++;
              } else if(response.data[i].scoreThree == $scope.parThree -1){
                  $scope.birdies++;
              } else if(response.data[i].scoreThree == $scope.parThree){
                  $scope.pars++;
              } else if(response.data[i].scoreThree == $scope.parThree + 1){
                  $scope.bogeys++;
              } else if(response.data[i].scoreThree == $scope.parThree + 2){
                  $scope.doubleBogeys++;
              }
              if(response.data[i].scoreFour == $scope.parFour - 3){
                  $scope.doubleEagles++;
              } else if(response.data[i].scoreFour == $scope.parFour - 2){
                  $scope.eagles++;
              } else if(response.data[i].scoreFour == $scope.parFour -1){
                  $scope.birdies++;
              } else if(response.data[i].scoreFour == $scope.parFour){
                  $scope.pars++;
              } else if(response.data[i].scoreFour == $scope.parFour + 1){
                  $scope.bogeys++;
              } else if(response.data[i].scoreFour == $scope.parFour + 2){
                  $scope.doubleBogeys++;
              }
              if(response.data[i].scoreFive == $scope.parFive - 3){
                  $scope.doubleEagles++;
              } else if(response.data[i].scoreFive == $scope.parFive - 2){
                  $scope.eagles++;
              } else if(response.data[i].scoreFive == $scope.parFive -1){
                  $scope.birdies++;
              } else if(response.data[i].scoreFive == $scope.parFive){
                  $scope.pars++;
              } else if(response.data[i].scoreFive == $scope.parFive + 1){
                  $scope.bogeys++;
              } else if(response.data[i].scoreFive == $scope.parFive + 2){
                  $scope.doubleBogeys++;
              }
              if(response.data[i].scoreSix == $scope.parSix - 3){
                  $scope.doubleEagles++;
              } else if(response.data[i].scoreSix == $scope.parSix - 2){
                  $scope.eagles++;
              } else if(response.data[i].scoreSix == $scope.parSix -1){
                  $scope.birdies++;
              } else if(response.data[i].scoreSix == $scope.parSix){
                  $scope.pars++;
              } else if(response.data[i].scoreSix == $scope.parSix + 1){
                  $scope.bogeys++;
              } else if(response.data[i].scoreSix == $scope.parSix + 2){
                  $scope.doubleBogeys++;
              }
              if(response.data[i].scoreSeven == $scope.parSeven - 3){
                  $scope.doubleEagles++;
              } else if(response.data[i].scoreSeven == $scope.parSeven - 2){
                  $scope.eagles++;
              } else if(response.data[i].scoreSeven == $scope.parSeven -1){
                  $scope.birdies++;
              } else if(response.data[i].scoreSeven == $scope.parSeven){
                  $scope.pars++;
              } else if(response.data[i].scoreSeven == $scope.parSeven + 1){
                  $scope.bogeys++;
              } else if(response.data[i].scoreSeven == $scope.parSeven + 2){
                  $scope.doubleBogeys++;
              }
              if(response.data[i].scoreEight == $scope.parEight - 3){
                  $scope.doubleEagles++;
              } else if(response.data[i].scoreEight == $scope.parEight - 2){
                  $scope.eagles++;
              } else if(response.data[i].scoreEight == $scope.parEight -1){
                  $scope.birdies++;
              } else if(response.data[i].scoreEight == $scope.parEight){
                  $scope.pars++;
              } else if(response.data[i].scoreEight == $scope.parEight + 1){
                  $scope.bogeys++;
              } else if(response.data[i].scoreEight == $scope.parEight + 2){
                  $scope.doubleBogeys++;
              }
              if(response.data[i].scoreNine == $scope.parNine - 3){
                  $scope.doubleEagles++;
              } else if(response.data[i].scoreNine == $scope.parNine - 2){
                  $scope.eagles++;
              } else if(response.data[i].scoreNine == $scope.parNine -1){
                  $scope.birdies++;
              } else if(response.data[i].scoreNine == $scope.parNine){
                  $scope.pars++;
              } else if(response.data[i].scoreNine == $scope.parNine + 1){
                  $scope.bogeys++;
              } else if(response.data[i].scoreNine == $scope.parNine + 2){
                  $scope.doubleBogeys++;
              }
          }
      })
    };
    $scope.getAverage();
    $scope.getScores();
    $scope.getAccuracy();
    $scope.getPutts();
}]);

homeApp.controller("TrackController", function(){
    console.log("Track is working");
});

homeApp.controller("SelectAccuracy", ["$scope", function($scope){
    $scope.accuracy = [
        'Left',
        'Center',
        'Right'
    ];
}]);

homeApp.controller('PostRound', ["$scope", "$http", function($scope, $http){
    $scope.round = {};

    $scope.updateRound = function(event, round){
        $http.post('/data', round);
    }
}]);
var json = JSON.stringify({date: new Date()});
console.log(json);
var obj = JSON.parse(json);
console.log(obj);
obj.date = new Date(obj.date);
console.log(obj);