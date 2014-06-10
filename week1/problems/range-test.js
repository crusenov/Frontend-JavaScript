"use strict";

var range = require("./range").range;

exports.TestRange1 = function(test){
  test.deepEqual([1,2,3,4,5], range(1,5));
  test.done();
};

exports.TestRange2 = function(test){
  test.deepEqual([5], range(5,5));
  test.done();
};

exports.TestRange3 = function(test){
  test.deepEqual([1,2], range(1,2));
  test.done();
};

