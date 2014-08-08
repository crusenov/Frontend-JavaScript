"use strict";

var sum_of_min_and_max = require("./sum_min_max").sum_of_min_and_max;

exports.TestSumMinMax1 = function(test) {
  test.equal(10, sum_of_min_and_max([1,2,3,4,5,6,8,9]));
  test.done();
};

exports.TestSumMinMax2 = function(test) {
  test.equal(90, sum_of_min_and_max([-10,5,10,100]));
  test.done();
};

exports.TestSumMinMax3 = function(test) {
  test.equal(2, sum_of_min_and_max([1]));
  test.done();
};
