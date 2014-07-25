/* global require, console*/
"use strict";

var data = require("./data");
var _ = require("./node_modules/lodash/lodash.js");

var studentInfo = function(students, id){
  for(var i in students){
    if(students[i].fields.student == id){
      return students[i]
    }
  }
};

var corruptedData = function(data){
  var dupl = [];
  var groupedByDate = _.groupBy(data, function(item){
    return item.fields.date;
  });

  _.keys(groupedByDate).forEach(function(date){

    var studentsForDate = [],
        students = groupedByDate[date];

    students.forEach(function(item){
      studentsForDate.push(item.fields.student);
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

exports.corruptedData = corruptedData;
//console.log(corruptedData(data));





