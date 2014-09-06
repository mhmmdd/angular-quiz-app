'use strict';

var app = angular.module('quiz-app', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/questions', {templateUrl: 'templates/questions.html', controller: questionsController});
  $routeProvider.when('/questions/:questionNo', {templateUrl:'templates/questions.html', controller: questionsController});

  $routeProvider.when('/results', {templateUrl:'templates/results.html', controller: resultsController});

  $routeProvider.otherwise({redirectTo:'/questions'});
}]);
