"use strict";

Array.prototype.first = function(){
  return this[0];
};

Array.prototype.range = function(from, to){
  var res = [];

  while(from <= to){
    res.push(from);
    from = from + 1;
  }
  return res;
};

Array.prototype.sum = function(){
  return this.reduce(function(prev, next){
    return prev + next;
  }, 0);
};

Array.prototype.average = function(){
  return this.sum() / this.length;
};

//console.log([2,3,4].first());
//console.log([2,3,4].sum());
//console.log([1,2,3,4].average());
