"use strict";

String.prototype.capitalize = function(){
  return this.toUpperCase();
};

String.prototype.dasharize = function(){
  return this.replace(/\_/g, "_");
};

Array.prototype.range = function(from, to){
  var res = [];

  while(from <= to){
    res.push(from + 1);
  }
  return res;
};

String.prototype.times = function(amount){
  var that = this;

  //[].range(1,5) -->[1,2,3,4,5]
  return [].range(1,amount).map(function(never_used){
              return that;
           }).join(" ");
};

String.prototype.blank = function(){
  if (/\S/.test(this)) {
    return false;
  } else {
    return true;
  }
};

//console.log("javascript".capitalize());
//console.log("border_bottom_width".dasharize());
//console.log("  a".blank());

