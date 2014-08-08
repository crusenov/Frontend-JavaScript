"use strict";

var sum_of_digits = require("./sum_of_digits").sum_of_digits;

exports.TestSumOfDigits1 = function(test){
  test.equal(43, sum_of_digits(1325132435356));
  test.done();
};

exports.TestSumOfDigits2 = function(test) {
  test.equal(6, sum_of_digits(123));
  test.done();
};

exports.TestSumOfDigits3 = function(test){
  test.equal(6, sum_of_digits(6));
  test.done();
};

exports.TestSumOfDigits4 = function(test){
  test.equal(1, sum_of_digits(-10));
  test.done();
};
