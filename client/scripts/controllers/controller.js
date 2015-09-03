var homeApp = angular.module('homeApp');

homeApp.controller("StatController", ["$scope", "$http", function($scope, $http){
    console.log("Stat is working");
    $scope.round = {};
    $scope.rounds = [];
    $scope.parOne = 5;
    $scope.parTwo = 5;
    $scope.parThree = 3;
    $scope.parFour = 4;
    $scope.parFive = 4;
    $scope.parSix = 4;
    $scope.parSeven = 5;
    $scope.parEight = 3;
    $scope.parNine = 4;
    //$scope.parTen = 5;
    //$scope.parEleven = 5;
    //$scope.parTwelve = 5;
    //$scope.parThirteen = 5;
    //$scope.parFourteen = 5;
    //$scope.parFifteen = 5;
    //$scope.parSixteen = 5;
    //$scope.parSeventeen = 5;
    //$scope.parEighteen = 5;
    $scope.totalHoles = 0;


    var accuracyCtx = document.getElementById("accuracyDonut").getContext("2d");
    var accuracyDonutChart = new Chart(accuracyCtx).Doughnut($scope.accuracyChart);
    var scoreCtx = document.getElementById("scoreDonut").getContext("2d");
    var scoreDonutChart = new Chart(scoreCtx).Doughnut($scope.scoreChart);
    $scope.toggle = function(){
      $scope.showChart = !$scope.showChart;
    };

    $scope.getDates = function(){
        //$scope.roundDates = [];
      $http.get('/data').then(function(response){
          $scope.round = {};
          $scope.rounds = response.data;
          for(var i = 0; i < response.data.length; i++){
              $scope.raw = JSON.stringify(response.data[i].date);
              $scope.string = JSON.parse($scope.raw);
              $scope.dateFormatted = new Date($scope.string);
              $scope.roundDates = $scope.dateFormatted;
              console.log($scope.roundDates);
          }
      })
    };

    $scope.getAverage = function(){
        $http.get('/data').then(function(response){
            $scope.round = {};
            $scope.rounds = response.data;
            $scope.sum = 0;
            for(var i = 0; i < response.data.length; i++){
                $scope.sum += response.data[i].scoreTotal;
                $scope.total = ($scope.sum/response.data.length).toFixed(0);

            }
        })
    };
    $scope.getPutts = function(){
      $http.get('/data').then(function(response){
          $scope.round = {};
          $scope.rounds = response.data;
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
              //if(response.data[i].areaTen == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaTen == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaTen == "Right"){
              //    $scope.shotsRight++;
              //}
              //if(response.data[i].areaEleven == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaEleven == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaEleven == "Right"){
              //    $scope.shotsRight++;
              //}
              //if(response.data[i].areaTwelve == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaTwelve == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaTwelve == "Right"){
              //    $scope.shotsRight++;
              //}
              //if(response.data[i].areaThirteen == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaThirteen == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaThirteen == "Right"){
              //    $scope.shotsRight++;
              //}
              //if(response.data[i].areaFourteen == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaFourteen == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaFourteen == "Right"){
              //    $scope.shotsRight++;
              //}
              //if(response.data[i].areaFifteen == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaFifteen == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaFifteen == "Right"){
              //    $scope.shotsRight++;
              //}
              //if(response.data[i].areaSixteen == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaSixteen == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaSixteen == "Right"){
              //    $scope.shotsRight++;
              //}
              //if(response.data[i].areaSeventeen == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaSeventeen == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaSeventeen == "Right"){
              //    $scope.shotsRight++;
              //}
              //if(response.data[i].areaEighteen == "Left"){
              //    $scope.shotsLeft++;
              //} else if(response.data[i].areaEighteen == "Center"){
              //    $scope.shotsCenter++;
              //} else if(response.data[i].areaEighteen == "Right"){
              //    $scope.shotsRight++;
              //}
              $scope.totalHoles += response.data[i].holesPlayed;
              $scope.percentageLeft = Math.round(($scope.shotsLeft/$scope.totalHoles) * 100);
              $scope.percentageCenter = Math.round(($scope.shotsCenter/$scope.totalHoles) * 100);
              $scope.percentageRight = Math.round(($scope.shotsRight/$scope.totalHoles) * 100);
              $scope.accuracyLabels = [($scope.percentageLeft + "% Left"),
                  ($scope.percentageCenter + "% Center"),
                  ($scope.percentageRight + "% Right")];
              $scope.accuracyDataset = [$scope.percentageLeft, $scope.percentageCenter, $scope.percentageRight];
              $scope.accuracyChart = [
                  {data: $scope.accuracyDataset, label: $scope.accuracyLabels}
              ];
          }
      })
    };
    $scope.getGiR = function(){
      $http.get('/data/').then(function(response){
          $scope.round = {};
          $scope.rounds = response.data;
          $scope.GiR = 0;
          $scope.GiRPercentage = 0;
          $scope.girOne = $scope.parOne - 2;
          $scope.girTwo = $scope.parTwo - 2;
          $scope.girThree = $scope.parThree - 2;
          $scope.girFour = $scope.parFour - 2;
          $scope.girFive = $scope.parFive - 2;
          $scope.girSix = $scope.parSix - 2;
          $scope.girSeven = $scope.parSeven - 2;
          $scope.girEight = $scope.parEight - 2;
          $scope.girNine = $scope.parNine - 2;
          //$scope.girTen = $scope.parTen - 2;
          //$scope.girEleven = $scope.parEleven - 2;
          //$scope.girTwelve = $scope.parTwelve - 2;
          //$scope.girThirteen = $scope.parThirteen - 2;
          //$scope.girFourteen = $scope.parFourteen - 2;
          //$scope.girFifteen = $scope.parFifteen - 2;
          //$scope.girSixteen = $scope.parSixteen - 2;
          //$scope.girSeventeen = $scope.parSeventeen - 2;
          //$scope.girEighteen = $scope.parEighteen - 2;
          for(var i = 0; i < response.data.length; i++){
              if((response.data[i].scoreOne - response.data[i].puttsOne) == $scope.girOne){
                  $scope.GiR++;
              }
              if((response.data[i].scoreTwo - response.data[i].puttsTwo) == $scope.girTwo){
                  $scope.GiR++;
              }
              if((response.data[i].scoreThree - response.data[i].puttsThree) == $scope.girThree){
                  $scope.GiR++;
              }
              if((response.data[i].scoreFour - response.data[i].puttsFour) == $scope.girFour){
                  $scope.GiR++;
              }
              if((response.data[i].scoreFive - response.data[i].puttsFive) == $scope.girFive){
                  $scope.GiR++;
              }
              if((response.data[i].scoreSix - response.data[i].puttsSix) == $scope.girSix){
                  $scope.GiR++;
              }
              if((response.data[i].scoreSeven - response.data[i].puttsSeven) == $scope.girSeven){
                  $scope.GiR++;
              }
              if((response.data[i].scoreEight - response.data[i].puttsEight) == $scope.girEight){
                  $scope.GiR++;
              }
              if((response.data[i].scoreNine - response.data[i].puttsNine) == $scope.girNine){
                  $scope.GiR++;
              }
              //if((response.data[i].scoreTen - response.data[i].puttsTen) == $scope.girTen){
              //    $scope.GiR++;
              //}
              //if((response.data[i].scoreEleven - response.data[i].puttsEleven) == $scope.girEleven){
              //    $scope.GiR++;
              //}
              //if((response.data[i].scoreTwelve - response.data[i].puttsTwelve) == $scope.girTwelve){
              //    $scope.GiR++;
              //}
              //if((response.data[i].scoreThirteen - response.data[i].puttsThirteen) == $scope.girThirteen){
              //    $scope.GiR++;
              //}
              //if((response.data[i].scoreFourteen - response.data[i].puttsFourteen) == $scope.girFourteen){
              //    $scope.GiR++;
              //}
              //if((response.data[i].scoreFifteen - response.data[i].puttsFifteen) == $scope.girFifteen){
              //    $scope.GiR++;
              //}
              //if((response.data[i].scoreSixteen - response.data[i].puttsSixteen) == $scope.girSixteen){
              //    $scope.GiR++;
              //}
              //if((response.data[i].scoreSeventeen - response.data[i].puttsSeventeen) == $scope.girSeventeen){
              //    $scope.GiR++;
              //}
              //if((response.data[i].scoreEighteen - response.data[i].puttsEighteen) == $scope.girEighteen){
              //    $scope.GiR++;
              //}
              $scope.totalHoles += response.data[i].holesPlayed;
              $scope.GiRPercentage = Math.round(($scope.GiR/$scope.totalHoles) * 100);
          }
      })
    };
    $scope.getScores = function(){
      $http.get('/data').then(function(response){
          $scope.round = {};
          $scope.rounds = response.data;
          $scope.doubleEagles = 0;
          $scope.eagles = 0;
          $scope.birdies = 0;
          $scope.pars = 0;
          $scope.bogeys = 0;
          $scope.doubleBogeys = 0;
          $scope.overDouble = 0;
          //$scope.scoreDataset = [];
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
              //if(response.data[i].scoreTen == $scope.parTen - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreTen == $scope.parTen - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreTen == $scope.parTen -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreTen == $scope.parTen){
              //    $scope.pars++;
              //} else if(response.data[i].scoreTen == $scope.parTen + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreTen == $scope.parTen + 2){
              //    $scope.doubleBogeys++;
              //}
              //if(response.data[i].scoreEleven == $scope.parEleven - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreEleven == $scope.parEleven - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreEleven == $scope.parEleven -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreEleven == $scope.parEleven){
              //    $scope.pars++;
              //} else if(response.data[i].scoreEleven == $scope.parEleven + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreEleven == $scope.parEleven + 2){
              //    $scope.doubleBogeys++;
              //}
              //if(response.data[i].scoreTwelve == $scope.parTwelve - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreTwelve == $scope.parTwelve - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreTwelve == $scope.parTwelve -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreTwelve == $scope.parTwelve){
              //    $scope.pars++;
              //} else if(response.data[i].scoreTwelve == $scope.parTwelve + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreTwelve == $scope.parTwelve + 2){
              //    $scope.doubleBogeys++;
              //}
              //if(response.data[i].scoreThirteen == $scope.parThirteen - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreThirteen == $scope.parThirteen - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreThirteen == $scope.parThirteen -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreThirteen == $scope.parThirteen){
              //    $scope.pars++;
              //} else if(response.data[i].scoreThirteen == $scope.parThirteen + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreThirteen == $scope.parThirteen + 2){
              //    $scope.doubleBogeys++;
              //}
              //if(response.data[i].scoreFourteen == $scope.parFourteen - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreFourteen == $scope.parFourteen - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreFourteen == $scope.parFourteen -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreFourteen == $scope.parFourteen){
              //    $scope.pars++;
              //} else if(response.data[i].scoreFourteen == $scope.parFourteen + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreFourteen == $scope.parFourteen + 2){
              //    $scope.doubleBogeys++;
              //}
              //if(response.data[i].scoreFifteen == $scope.parFifteen - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreFifteen == $scope.parFifteen - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreFifteen == $scope.parFifteen -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreFifteen == $scope.parFifteen){
              //    $scope.pars++;
              //} else if(response.data[i].scoreFifteen == $scope.parFifteen + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreFifteen == $scope.parFifteen + 2){
              //    $scope.doubleBogeys++;
              //}
              //if(response.data[i].scoreSixteen == $scope.parSixteen - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreSixteen == $scope.parSixteen - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreSixteen == $scope.parSixteen -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreSixteen == $scope.parSixteen){
              //    $scope.pars++;
              //} else if(response.data[i].scoreSixteen == $scope.parSixteen + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreSixteen == $scope.parSixteen + 2){
              //    $scope.doubleBogeys++;
              //}
              //if(response.data[i].scoreSeventeen == $scope.parSeventeen - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreSeventeen == $scope.parSeventeen - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreSeventeen == $scope.parSeventeen -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreSeventeen == $scope.parSeventeen){
              //    $scope.pars++;
              //} else if(response.data[i].scoreSeventeen == $scope.parSeventeen + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreSeventeen == $scope.parSeventeen + 2){
              //    $scope.doubleBogeys++;
              //}
              //if(response.data[i].scoreEighteen == $scope.parEighteen - 3){
              //    $scope.doubleEagles++;
              //} else if(response.data[i].scoreEighteen == $scope.parEighteen - 2){
              //    $scope.eagles++;
              //} else if(response.data[i].scoreEighteen == $scope.parEighteen -1){
              //    $scope.birdies++;
              //} else if(response.data[i].scoreEighteen == $scope.parEighteen){
              //    $scope.pars++;
              //} else if(response.data[i].scoreEighteen == $scope.parEighteen + 1){
              //    $scope.bogeys++;
              //} else if(response.data[i].scoreEighteen == $scope.parEighteen + 2){
              //    $scope.doubleBogeys++;
              //}
              $scope.scoreLabels = [($scope.doubleEagles + " Double Eagles"),
                  ($scope.eagles + " Eagles"),
                  ($scope.birdies + " Birdies"),
                  ($scope.pars + " Pars"),
                  ($scope.bogeys + " Bogeys"),
                  ($scope.doubleBogeys + " Double Bogeys")];
              $scope.scoreDataset = [$scope.doubleEagles,
                  $scope.eagles,
                  $scope.birdies,
                  $scope.pars,
                  $scope.bogeys,
              $scope.doubleBogeys];
              $scope.scoreChart = [
                  {data: $scope.scoreDataset, label: $scope.scoreLabels}
              ];
          }
      })
    };

    $scope.getAverage();
    $scope.getScores();
    $scope.getAccuracy();
    $scope.getPutts();
    $scope.getDates();
    $scope.getGiR();

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


