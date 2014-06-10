"use strict";

var always = function(x){
  return function() {
    return x; };
};

//var id = function(x) { return x; };
//exports.id=id;

exports.always = always;

