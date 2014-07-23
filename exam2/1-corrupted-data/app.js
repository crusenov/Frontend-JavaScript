/* global require, console */
"use strict";

var data = require("./data");

var groupBy = function(groupingFunction, arr) {
  var res = {};
  arr.forEach(function(x){
    if(res[groupingFunction(x)]){
      res[groupingFunction(x)].push(x);
    }
    else {
      res[groupingFunction(x)] = [x];
    }});
  return res;
};

var studentInfo = function(students, id){
  for(var i in students){
    if(students[i].fields.student == id){
      return students[i]
    }
  }
};

var duplicates = function(data) {

  var groupedByDate = groupBy(function(st){
    return st.fields.date;
  }, data);

  var dupl = [];
  Object.keys(groupedByDate).forEach(function(date){

    var studentsForDate = [],
        students = groupedByDate[date];

    students.forEach(function(x){
      studentsForDate.push(x.fields.student);
    });

    var countLog = studentsForDate.reduce(function (acc, curr) {
      if (typeof acc[curr] == "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc;
    }, {});

    for(var st in countLog){
      if(countLog[st] > 1){
        dupl.push(studentInfo(students, st));
      }
    }
  });
  return dupl;
};

console.log(duplicates(data));





