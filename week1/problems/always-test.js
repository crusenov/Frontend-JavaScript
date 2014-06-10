"use strict";

var always = require("./always").always;

exports.testOne = function(test){
  var f = always(5);
  test.equal(5, f(5));
  test.done();
};

exports.testTwo = function(test){
  var f = always(2);
  test.equal(2, f(2));
  test.done();
};
