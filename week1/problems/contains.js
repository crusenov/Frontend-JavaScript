"use strict";

var contains = function(element, arr) {
  return arr.some(function(x) {
    return x === element;
  });
};

exports.contains = contains;
