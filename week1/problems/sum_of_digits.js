"use strict";

var sum_of_digits = function(n) {
    var sum = 0;
    while(n!==0){
      sum += Math.abs(n) % 10;
      n = parseInt(n/10, 10);
    }
    return sum;
};

exports.sum_of_digits = sum_of_digits;
