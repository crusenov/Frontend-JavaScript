"use strict";
//console.log("Empty I am.");

$(document).ready(function(){
  var HIGHLIGHT = "highlight",
      allParagraphs = [".first", ".second", ".third"];
      //allParagraphs = [];

  // $("p").each(function(index, elem){
  //   allParagraphs.push($(elem).attr("class"));
  // });

  $("#toggle-btn").on("click", function(){

    $("."+HIGHLIGHT).removeClass(HIGHLIGHT);
    var toHighlight = allParagraphs.shift(); // "." +
    $(toHighlight).addClass(HIGHLIGHT);
    allParagraphs.push(toHighlight);
  });

});
