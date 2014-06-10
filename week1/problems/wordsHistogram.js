"use strict";

var wordsHistogram = function(string){
  var lower= string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                   .toLowerCase();
  var words = lower.split(" ");
  //console.log(words);
  var uniqueWords = words.sort().filter(function(el,i,a){
        if(i==a.indexOf(el))
            return 1;
        return 0;
    });
  console.log(uniqueWords);
  var dict = [];
  uniqueWords.map(function(x){
    console.log(x);
    dict[x] = lower.split(x).length-1;
    console.log(x);
  });
  return dict;
};

console.log(wordsHistogram("A function is a function with a very functional function!"));
