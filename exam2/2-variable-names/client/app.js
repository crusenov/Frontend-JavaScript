/* global $, Handlebars*/
"use strict";

var makeInputTemplate = function(data){

  var source = $("#input-template").html();
  var template = Handlebars.compile(source);
  var context = {name: data};
  $(".container").append(template(context));
};

var listAllNames = function(){

  $.ajax({
    url: "http://localhost:8080/names",
    type: "GET"
  }).done(function(data){
    makeInputTemplate(data);
  });
};

var updateName = function(name, id){

  $.ajax({
    url: "http://localhost:8080/name",
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
});

$(document).on("change", ".input-name", function(){

  var name = $(this).val();
  var id = $(this).attr("id");
  $("#btn-" + id).removeAttr("disabled");

  $("#btn-" + id).on("click", function(){

    updateName(name, id);
  });
});






