/* global $ */
"use strict";

$(document).ready(function(){

  $(".tabs li > a").on("click", function(event){
    event.preventDefault();
    $(".tabs li > a").removeClass("active");

    $(".show").hide();
    var $toShow = $(this).parent().attr("rel");
    $("#"+$toShow).slideDown(500);
    $(this).addClass("active");
  });

});
