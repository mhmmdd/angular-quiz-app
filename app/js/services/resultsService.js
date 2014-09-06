'use strict';

/* resultsService */
app.service('resultsService', function () {
  var _questions;
  return {
    setResults: function (questions) {
      _questions = questions;
    },
    getResults: function () {
      return _questions;
    }
  };
});
