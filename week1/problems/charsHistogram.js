"use strict";

var charsHistogram = function(string) {
    var lower  = string.toLowerCase();
    var letters = "abcdefghijklmnopqrstuvwxyz".split("");
    var str = lower.split("").filter(function(ch){
        return letters.indexOf(ch) >= 0;
    });
    var keys = str.sort().filter(function(el,i,a){
        if(i==a.indexOf(el))
            return 1;
        return 0;
    });
    var dict = {};
    keys.map(function(x){
        dict[x] = lower.split(x).length - 1;
    });
    return dict;
};

var str = "Count the characters in this very profound sentence";
console.log(charsHistogram(str));
