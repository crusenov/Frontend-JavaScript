"use strict";

$(document).ready(function() {

  $("#search-button").on("click", function(){
    var imageUrl = $("#search-input").val();
    var $img = $("<img>").attr("src", imageUrl);

    $img.load(function(){
      $("#galery").append($img);
      $("#galery").append("</br>");
    });

    $img.on("click", function(){
      $img.remove();
    });
  });

});
