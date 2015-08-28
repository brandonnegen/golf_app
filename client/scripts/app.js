var homeApp = angular.module('homeApp',['ngRoute', 'appControllers', 'ngMaterial', 'ngAnimate', 'ngAria']);

var appControllers = angular.module('appControllers', []);

homeApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/track', {
          templateUrl: "/assets/views/track.html",
            controller: "TrackController"
        }).
        when('/stats', {
            templateUrl: "/assets/views/stats.html",
            controller: "StatController"
        }).
        otherwise({
            redirectTo: "/assets/views/index.html"
        })
}]);

