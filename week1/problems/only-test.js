"use strict";

var only = require("./only").only;

exports.TestOnly1 = function(test){
  test.equal(true, only("number", [1,2,3,4]));
  test.done();
};

exports.TestOnly2 = function(test){
  test.equal(false, only("string", [1,2,3,4]));
  test.done();
};

exports.TestOnly3 = function(test){
  test.equal(false, only("string", ["asd",2,3,4]));
  test.done();
};




