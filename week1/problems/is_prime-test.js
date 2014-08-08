"use strict";

var is_prime = require("./is_prime").is_prime;

// is_prime(1) === false
// is_prime(2) === true
// is_prime(8) === false
// is_prime(11) === true
// is_prime(-10) === false

exports.TestIsPrime1 = function(test) {
  test.equal(false, is_prime(1));
  test.done();
};

exports.TestIsPrime2 = function(test) {
  test.equal(true, is_prime(2));
  test.done();
};

exports.TestIsPrime3 = function(test) {
  test.equal(false, is_prime(8));
  test.done();
};

exports.TestIsPrime4 = function(test) {
  test.equal(true, is_prime(11));
  test.done();
};

exports.TestIsPrime5 = function(test) {
  test.equal(false, is_prime(-10));
  test.done();
};

