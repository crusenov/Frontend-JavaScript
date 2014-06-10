"use strict";

var concat = function(a, b){
  if(typeof a === "string" && typeof b === "string"){
    return a+b;
  } else {
    throw new TypeError("Something is wrong with the types.");
  }
};

exports.concat = concat;
