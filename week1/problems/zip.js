"use strict";

var zip = function() {
    var values = [].slice.apply(arguments);
    //console.log(values);
    return values[0].map(function(_,i) {
      return values.map(function(arr){
        return arr[i];
      });
    });
};

//console.log(zip([1, 2, 3], [4, 5, 6]));
