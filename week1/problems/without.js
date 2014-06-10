"use strict";

var contains = function(element, arr) {
  return arr.some(function(x) {
    return x === element;
  });
};

var without = function(exclude, arr) {
  var index;
  exclude.forEach(function(x){
    if(contains(x, arr)){
      index = arr.indexOf(x);
      arr.splice(index, 1);
    }
  });
  return arr;
};

exports.without = without;
console.log(without([5,6,9,1], [1,2,3,4,5,6,7,8,9]));
