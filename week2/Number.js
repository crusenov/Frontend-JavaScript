"use strict";

Array.prototype.range = function(from, to){
  var res = [];

  while(from <= to){
    res.push(from);
    from = from + 1;
  }
  return res;
};

Number.prototype.times = function(action) {
  var rg = [].range(1,this);
  rg.map(function(x) {
    return action;
  }).forEach(function(f){
    f();
  });
};

(5).times(function() {
  console.log("OMG!");
});
