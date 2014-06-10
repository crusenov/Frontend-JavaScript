"use strict";

var containsAll = require("./containsAll").containsAll;

exports.TestContainsAll1 = function(test){
  test.equal(true, containsAll([1,2,3], [1,2,3,4,5]));
  test.done();
};

exports.TestContainsAll2 = function(test){
  test.equal(false, containsAll([1,2], [4,5,6,7,8]));
  test.done();
};

// exports.TestContainsAll3 = function(test){
//   test.equal();
//   test.done();
//};
