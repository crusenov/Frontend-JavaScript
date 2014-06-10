"use strict";

var containsAll = function(elements, arr) {
  return elements.every(function(x) {
    return arr.some(function(y) {
      return x === y;
    });
  });
};

exports.containsAll = containsAll;
