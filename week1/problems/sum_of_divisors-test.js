"use strict";

var sum_of_divisors = require("./sum_of_divisors").sum_of_divisors;

// sum_of_divisors(8) === 15
// sum_of_divisors(7) === 8
// sum_of_divisors(1) === 1
// sum_of_divisors(1000) === 2340

exports.TestSumOfDiv1 = function(test) {
  test.equal(15, sum_of_divisors(8));
  test.done();
};

exports.TestSumOfDiv2 = function(test){
  test.equal(8, sum_of_divisors(7));
  test.done();
};

exports.TestSumOfDiv3 = function(test){
  test.equal(1, sum_of_divisors(1));
  test.done();
};


exports.TestSumOfDiv4 = function(test){
  test.equal(2340, sum_of_divisors(1000));
  test.done();
};


