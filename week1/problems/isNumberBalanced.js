"use strict";
//slice(a.length/2 + (a.length%2)) a is array
var isNumberBalanced = function(x) {
    return x.toString() === x.toString()
                             .split("")
                             .slice(x.length/2 + (x.length%2))
                             .reduce(function(a,b) {
                                return a+b;
                             });
};

exports.isNumberBalanced = isNumberBalanced;
