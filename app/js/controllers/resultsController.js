'use strict';

/* resultsController */

function resultsController ($scope, $location, $resultsService) {
  $scope.results = $resultsService.getResults();
  $('#results').modal();


  $scope.closeModal = function() {
    $('#results').modal('hide');
    $location.path('/questions');
  }
}
resultsController.$inject = ['$scope', '$location', 'resultsService'];

