"use strict";

var find = require("./find").find;

exports.TestFind1 = function(test){
  test.equal(3, find(function(x) {
  return x > 2;
}, [1,2,3,4,5]));
  test.done();
};

// var find = require("./find").find;

// exports.testFindOne = function(test) {
//   test.equal(2, find(function(x) { return x % 2 === 0;}, [1,2,3,4]));
//   test.done();
// };

// exports.testFindTwo = function(test) {
//   test.equal(undefined, find(function(x) { return x % 2 === 0;}, [1,1,3,5]));
//   test.done();
// };
