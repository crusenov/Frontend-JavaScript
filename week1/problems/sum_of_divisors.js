"use strict";

var sum_of_divisors = function(n) {
  var
  sum = 0,
  i = 0;
  for(i; i <= n; i++){
    if(n%i === 0){
      sum += i;
    }
  }
  return sum;
};

exports.sum_of_divisors = sum_of_divisors;
