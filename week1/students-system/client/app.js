"use strict";

$(document).ready(function() {
  //alert("Hooray, everything runs ok. You can remove this annoying alert from the code.");

  var allStudents = [];

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

  var generateTable = function(students){

    var studentsContent = "";
    students.forEach(function(student) {
        studentsContent += ["<tr id=\"", student.id.toString(), "\">",
                              "<td>", student.id, "</td>",
                              "<td>", student.name, "</td>",
                              "<td>", student.course, "</td>",
                            "</tr>"].join("");
      });

      var table = ["<table class='table'>",
                   "<thead>",
                     "<tr>",
                       "<th>", "Id", "</th>",
                       "<th>", "Name", "</th>",
                       "<th>", "Course", "</th>",
                     "</tr>",
                   "</thead>",
                   "<tbody>",
                   studentsContent,
                   "</tbody>",
                   "</table>"].join("");
    return table;
  };

  var find = function(predicate, arr) {
    var newArr = arr.filter(predicate);
    return newArr[0];
  };

  var getId = function(searchName, list){
    var id;
    list.forEach(function(x){
      if(searchName === x.name && x.id >= 0){
        id = x.id;
      }
    });
    return id;
  };


  $.getJSON('http://localhost:3000/students', function(students, textStatus) {
      //console.log(textStatus);
      //console.log(students);
      allStudents = students;

      var table = generateTable(students);
      $(".table-container").append(table);
  });

  $("#group-btn").on("click", function() {

    var groupStudents = groupBy(function(student){
      return student.course;
    }, allStudents);

    Object.keys(groupStudents).forEach(function(key){
      var curStudent = groupStudents[key];
      var table = generateTable(curStudent);

      $(".table-container").append(table);
    });
  });

  $("#search-btn").on("click", function() {
    var searched = $("#search-box").val();
    if(find(function(x) {
      return x.name === searched;
    }, allStudents)){

      var searchedId = getId(searched, allStudents);
      var tr = document.getElementById(searchedId);
      tr.setAttribute('class', 'success');
      //tr.addClass("success");
    }

  });
});
