"use strict";

var groupBy = function(groupingFunction, arr) {
  var res = {};
  arr.forEach(function(x){
    if(res[groupingFunction(x)]){
      res[groupingFunction(x)].push(x);
    }
    else {
      res[groupingFunction(x)] = [x];
    }});
  return res;
};

exports.groupBy = groupBy;

