"use strict";

$(document).ready(function(){

  var initAll = function(students){

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

    var studentsName = groupBy(function(student){
      return student.name;
    }, students);

    Object.keys(studentsName).forEach(function(name){
      $("<option>").text(name).appendTo("#first-list");
    });

    $("#move-right").on("click", function(){

      var allVals = [];

      $("#first-list :selected").each(function(){
        allVals.push($(this).val());
      });
      allVals.forEach(function(name){
        $("<option>").text(name)
                     .appendTo("#second-list");
      });

      $("#first-list :selected").remove();
    });

    $("#move-left").on("click", function(){

      var allVals = [];

      $("#second-list :selected").each(function(){
        allVals.push($(this).val());
      });
      allVals.forEach(function(name){
        $("<option>").text(name)
                     .appendTo("#first-list");
      });

      $("#second-list :selected").remove();
    });
  };


  $.getJSON('http://localhost:3000/students', function(students, textStatus) {

    initAll(students);

  });
});
