/* global require, console*/
"use strict";

var data = require("./data"),
    _ = require("lodash");

var studentInfo = function(students, id){

  var res = [],
      flag = 0;

  Object.keys(students).forEach(function(item){
    if(students[item].fields.student === id && flag === 0){
      res.push(students[item]);
      flag = 1;
    }
  });
  return res;
};

var corruptedData = function(data){

  var dupl = [],
      studentsForDate = [],
      students = [],
      countLog,
      groupedByDate;

  groupedByDate = _.groupBy(data, function(item){
    return item.fields.date;
  });

  _.keys(groupedByDate).forEach(function(date){

    studentsForDate = [];
    students = groupedByDate[date];

    students.forEach(function(item){
      studentsForDate.push(item.fields.student);
    });

    countLog = studentsForDate.reduce(function (acc, curr) {
      if (typeof acc[curr] === "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc;
    }, {});

    for(var st in countLog){
      if(countLog[st] > 1){
        dupl.push(studentInfo(students, parseInt(st, 10)));
      }
    }
  });
  return dupl;
};

exports.corruptedData = corruptedData;
console.log(corruptedData(data));





