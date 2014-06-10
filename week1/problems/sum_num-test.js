"use strict";

var sum_num = require("./sum_num").sum_num;

exports.TestSumNum1 = function(test){
  test.equal(3, sum_num(1,2));
  test.done();
};

exports.TestSumNum2 = function(test){
  test.equal(12, sum_num(9, 3)); test.done();
};

 exports.testThrows = function(test) {
  test.throws(function() {
    sum_num(12, "asd");
  });
  test.done();
};

