"use strict";

var isIntPalindrom = function(x) {
    return x.toString() === x.toString()
                             .split("")
                             .reverse()
                             .reduce(function(a,b) {
                                return a+b;
                             });
};

exports.isIntPalindrom = isIntPalindrom;
