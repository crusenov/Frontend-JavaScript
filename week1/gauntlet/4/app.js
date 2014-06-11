"use strict";

$(document).ready(function(){

    var initAll = function(students) {

    var groupBy = function(groupingFunction, arr) {
        var res = {};
        arr.forEach(function(x){
            if(res[groupingFunction(x)]){
              res[groupingFunction(x)].push(x);
            } else {
              res[groupingFunction(x)] = [x];
        }});
      return res;
    };

    var getStudentByCourse = function(students, course){
      var res = [];
      students.forEach(function(student){
        if(student.course === course){
          res.push(student.name);
        }
      });
      return res;
    };

    var getGithubByName = function(students, name){
      var res = [];
      students.forEach(function(student){
        if(student.name === name){
          res.push(student.github);
        }
      });
      return res;
    };

    var groupStudents = groupBy(function(student){
      return student.course;
    }, students);

    Object.keys(groupStudents).forEach(function(name) {
      $("<option />", {value: name, text: name}).appendTo($("#course-pick"));
    });

    $("#course-pick").on("change", function(){


      $("#student-pick").empty();
      $("h2").remove();
      var value = $(this).val();
      var names = getStudentByCourse(students, value);

      $(this).each(function(){
        names.forEach(function(name){
          $("<option />", {value: name, text: name}).appendTo($("#student-pick"));
        });
      });
      $("#student-pick").trigger("change");
    });

    $("#student-pick").on("change", function(){

      //$("#student-pick").trigger("change");
      $("h2").remove();
      var value = $(this).val();
      var github = getGithubByName(students, value);

      $(this).each(function(){
         $( "<h2>GitHub for " + value + " is " + github + "</h2>" ).insertAfter( "#info" );
      });
    });
};

  $.getJSON('http://localhost:3000/students', function(students, textStatus) {

    initAll(students);

  });
});


