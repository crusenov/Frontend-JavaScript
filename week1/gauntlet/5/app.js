"use strict";

$(document).ready(function () {


  var theGame = function() {
    var theNumber = Math.floor(Math.random() * 10000000000),
        input = "";


    $("#number").text(theNumber);

    $(".btn-lg").on("click", function(){

      var value = $(this).text();

      if(!isNaN(parseInt(value,10))) {
        input += value;
      }

      if (!parseInt(input, 10)) {
        input = "";
      }

      $("#attempt").text(input);
      if(theNumber === parseInt(input, 10)){
        alert("Good Game!!!");
      }
    });

    $(".btn-warning").on("click", function() {

      var end = input.length - 1;
      input = input.slice(0,end);

      $("#attempt").text(input);
    });
  };

  theGame();

});
