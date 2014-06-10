"use strict";

var countBy = function(countingFunction, arr) {
  var res = {};
  arr.forEach(function(x){
    if(res[countingFunction(x)]){
      res[countingFunction(x)] += 1;
    }
    else {
      res[countingFunction(x)] = 1;
    }});
  return res;
};

exports.countBy = countBy;

