'use strict';

/* questionsController */

function questionsController($scope, $http, $routeParams, $location, $resultsService) {

  $scope.questionNo = $routeParams && $routeParams.questionNo ? $routeParams.questionNo : 1;
  $scope.slidePage = $scope.questionNo;
  $http.get('./questions/questions.json').success(function (questions){
    $scope.questions = questions;
  });

  $scope.selectAnswer = function (question, choice) {
    question.selected = choice;
  };

  $scope.prevPage = function() {
    $scope.slidePage--;
  };

  $scope.nextPage = function() {
    $scope.slidePage++;
  };

  $scope.viewResults = function () {
    $resultsService.setResults($scope.questions);
    $location.path( "/results" );
  }
}
questionsController.$inject = ['$scope', '$http', '$routeParams', '$location', 'resultsService'];/**
 * Created by 7 on 06.09.2014.
 */
