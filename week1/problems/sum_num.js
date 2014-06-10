"use strict";

var sum_num = function(a, b){
  if(typeof a === "number" && typeof b === "number"){
    return a+b;
  } else {
    throw new TypeError("Something is wrong with the types.");
  }
};

exports.sum_num = sum_num;
