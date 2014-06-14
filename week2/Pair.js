"use strict";

function Pair(left, right){
  this.left = left;
  this.right = right;
}

Pair.prototype.equals = function(pair) {
  if(!(pair instanceof Pair)){
    throw new TypeError("Should be Pair");
  }
  return pair.left === this.left && pair.right === this.right;
};

Pair.prototype.toString = function(){
  //({left}, {right})
  return ["({" , this.left.toString() , "}, {" , this.right.toString(), "})"].join("");
};

Pair.prototype.toList = function() {
  return [this.left, this.right];
};

Pair.prototype.combine = function(f) {
  return f(this.left, this.right);
};

var p = new Pair(3,4);
var q = new Pair(3,6);
//console.log(p.equals(q));
console.log(p.toString());
//console.log(p.toList());
// var res = p.combine(function(left, right) {
//     return left + right;
// });
// console.log(res);
