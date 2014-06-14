"use strict";

var zip = function() {
    var values = [].slice.apply(arguments);
    //console.log(values);
    return values[0].map(function(_,i) {
      return values.map(function(arr){
        return arr[i];
      });
    });
};

var mult = function(arr){
  var res = 1;

  arr.forEach(function(x){
    res *= x;
  });
  return res;
};

var beerAndFries = function(info){

  var beerArr = [],
      friesArr = [];

  info.forEach(function(x){
    if(x.type === "beer"){
      beerArr.push(x.score);
    } else {
      friesArr.push(x.score);
    }
  });

  beerArr.sort(function(a, b){
    return a - b;
  });
  friesArr.sort(function(a, b){
    return a - b;
  });

  var beerAndFries = zip(beerArr, friesArr),
      res = 0;

  beerAndFries.forEach(function(x){
    res += mult(x);
  });

  return res;
};

exports.beerAndFries = beerAndFries;
