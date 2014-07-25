/* global $ */

$(document).ready(function() {
  "use strict";

  $(".accordion dt > a").on("click", function(event) {
     event.preventDefault();

     $(".content").hide();
     var toShow = $(this).closest("dt").attr("id");
     $("#"+toShow).next(".content").slideToggle(500);

  });
});
