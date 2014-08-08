"use strict";

var isNumberBalanced = require("./isNumberBalanced").isNumberBalanced;

// is_number_balanced(9) === true
// is_number_balanced(11) === true
// is_number_balanced(13) === false
// is_number_balanced(121) === true
// is_number_balanced(4518) === true
// is_number_balanced(28471) === false
// is_number_balanced(1238033) === true

exports.TestIsNumberBalanced1 = function(test){
  test.equal(true, isNumberBalanced(9));
  test.done();
};

exports.TestIsNumberBalanced2 = function(test){
  test.equal(true, isNumberBalanced(11));
  test.done();
};

exports.TestIsNumberBalanced3 = function(test){
  test.equal(false, isNumberBalanced(13));
  test.done();
};

exports.TestIsNumberBalanced4 = function(test){
  test.equal(true, isNumberBalanced(121));
  test.done();
};

exports.TestIsNumberBalanced5 = function(test){
  test.equal(true, isNumberBalanced(4518));
  test.done();
};

exports.TestIsNumberBalanced6 = function(test){
  test.equal(false, isNumberBalanced(28471));
  test.done();
};

exports.TestIsNumberBalanced7 = function(test){
  test.equal(true, isNumberBalanced(1238033));
  test.done();
};
