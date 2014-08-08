"use strict";

var map = function(f, arr){
  var i = 0,
      n = arr.length,
      res = [];
  for(i ; i < n; i++){
      res.push(f(arr[i]));
  }
  return res;
};

var result = map(function(x) {
    return x * x;
}, [1,2,3]);

console.log(result);
