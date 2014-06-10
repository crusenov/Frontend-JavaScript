// "use strict";

// var find = function(predicate, arr) {
//   var res = [];
//   arr.forEach(function(x){
//     if(predicate(x)){
//       res.push(x);
//     } else {
//       return "undefined";
//     }
//   });
//   return res[0];
// };

"use strict";

var find = function(predicate, arr) {
  var newArr = arr.filter(predicate);
  return newArr[0];
};

exports.find = find;

exports.find = find;
var res = find(function(x) {
  return x===5;
}, [1,2,3,4,5]);

console.log(res);
