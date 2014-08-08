"use strict";

var isIntPalindrom = require("./isIntPalindrom").isIntPalindrom;

// is_int_palindrome(1) === true
// is_int_palindrome(42) === false
// is_int_palindrome(100001) === true
// is_int_palindrome(999) === true
// is_int_palindrome(123) === false

exports.TestIsIntPalindrom1 = function(test){
  test.equal(true, isIntPalindrom(1));
  test.done();
};

exports.TestIsIntPalindrom2 = function(test){
  test.equal(false, isIntPalindrom(42));
  test.done();
};

exports.TestIsIntPalindrom3 = function(test){
  test.equal(true, isIntPalindrom(1000001));
  test.done();
};

exports.TestIsIntPalindrom4 = function(test){
  test.equal(true, isIntPalindrom(999));
  test.done();
};

exports.TestIsIntPalindrom5 = function(test){
  test.equal(false, isIntPalindrom(123));
  test.done();
};


