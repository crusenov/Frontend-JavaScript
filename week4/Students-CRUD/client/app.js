/* global $, Handlebars*/
"use strict";

var makeTable = function(data){

  var source = $("#list-table-template").html();
  var template = Handlebars.compile(source);
  var context = {data: data};
  $("body").append(template(context));

};

var createUpdateStudent = function(){

  var name = $("#name").val();
  var facNumber = $("#facultyNumber").val();
  var courses = $("#courses").val();

  $.ajax({
    url: "http://localhost:3030/student",
    type: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify({
      "facultyNumber":facNumber,
      "name": name,
      "courses": courses.split(",")
    }),
  });
};

var listAllStudent = function(){
  $.ajax({
    url: "http://localhost:3030/students",
    type: "GET"
  }).done(function(data){
    makeTable(data);
  });
};

var deleteStudent = function(){

  var facNumber = $("#facultyNumber").val();

  $.ajax({
    url: "http://localhost:3030/student/" + facNumber,
    type: "DELETE"
    });
};


$(document).ready(function(){

  listAllStudent();
});

  $(document).on("click", ".create", function(){
    createUpdateStudent();
    listAllStudent();
  });

  $(document).on("click", ".update", function(){
    createUpdateStudent();
    listAllStudent();
  });

  $(document).on("click", ".delete", function(){
    deleteStudent();
    listAllStudent();
  });
