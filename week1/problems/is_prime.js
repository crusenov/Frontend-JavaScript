"use strict";

var is_prime = function(n) {
  var
    i = 2,
    flag = 0;
  if(n === 1){
    return false;
  } else if(n === 2){
    return true;
  }
  for(i; i<=n/2; i++){
    if(Math.abs(n) % i === 0){
      flag = 0;
    } else {
      flag = 1;
    }
  }
  if (flag === 0){
    return false;
  } else {
    return true;
  }
};

exports.is_prime = is_prime;
