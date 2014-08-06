/* global $, Handlebars*/
"use strict";

var baseUrl = "http://localhost:8080/";

var createAllInputs = function(data){

  var source = $("#input-template").html(),
      template = Handlebars.compile(source),
      context = {name: data};
  $(".container").append(template(context));
};

var listAllNames = function(){

  $.ajax({
    url: baseUrl +  "names",
    type: "GET"
  }).done(function(data){
    createAllInputs(data);
  });
};

var updateName = function(name, id){

  $.ajax({
    url: baseUrl + "name",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({
      "name": name,
      "nameId": id
    })
  }).done(function(){
            $(".container").empty();
            listAllNames();
        });
};

$(document).ready(function() {
  listAllNames();

  $(document).on("keyup", ".input-name", function(){
     var id = $(this).attr("id");
    $("#btn-" + id).removeAttr("disabled");
  });

  $(document).on("click", "button", function() {
    var name = $(this).parent().find(".input-name").val(),
        id = $(this).parent().find(".input-name").attr("id");
    updateName(name, id);
  });
});







