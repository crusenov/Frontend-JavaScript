"use strict";

var range = function(from, to) {
  if( from === to ){
    return [from];
  } else {
    return range(from, to-1).concat(to);
  }
};

exports.range = range;

