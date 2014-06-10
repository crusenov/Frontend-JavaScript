"use strict";

var contains = require("./contains"). contains;

exports.TestConatins1 = function(test){
  test.equal(true, contains(3, [1,4,3,6,9]));
  test.done();
};

exports.TestConatins2 = function(test){
  test.equal(true, contains("asd", ["asd", "aswe"]));
  test.done();
};
