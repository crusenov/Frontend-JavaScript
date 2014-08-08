"use strict";

var forEach = function(f, arr) {
  var
    i = 0;

    for(i in arr) {
      f(arr[i],i, arr);
    }
};

var info = {
    "name" : "Rado",
    "age" : 23
};

forEach(function(value, key) {
   console.log(key + " - " + value);
   // name - Rado
   // age - 23
}, info);
