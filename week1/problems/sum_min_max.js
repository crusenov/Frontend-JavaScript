"use strict";

var sum_of_min_and_max = function(arr){
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  return max+min;
};

exports.sum_of_min_and_max = sum_of_min_and_max;
