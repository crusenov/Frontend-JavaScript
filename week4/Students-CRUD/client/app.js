/* global $, Handlebars*/
"use strict";

var makeTable = function(data){

  var source = $("#list-table-template").html();
  var template = Handlebars.compile(source);
  var context = {data: data};
  $(".table-container").append(template(context));

};

var createUpdateStudent = function(){

  var name = $("#name").val();
  var facNumber = $("#facultyNumber").val();
  var courses = $("#courses").val();
  console.log(name);

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
  }).done(function(){
    $(".table-container").empty();
    listAllStudent();
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
    }).done(function(){
        $(".table-container").empty();
        listAllStudent();
      });
};


$(document).ready(function(){

  listAllStudent();

  $(document).on("click", ".create", function(){
    createUpdateStudent();
  });

  $(document).on("click", ".update", function(){
    createUpdateStudent();
  });

  $(document).on("click", ".delete", function(){
    deleteStudent();
    listAllStudent();
  });

  $(document).on("click", "#btn-edit", function(){

    var curr = "";
    var name = $(this).closest("tr").find("#td-name").text();
    var fn = $(this).closest("tr").find("#td-fn").text();
    var courses = $(this).closest("tr").find("#td-courses").text();
    var editCourses = curr + courses;

    $("#name").val(name);
    $("#facultyNumber").val(fn).attr("readonly", true);
    $("#courses").val(editCourses.slice(0, -4));

  });
});


