"use strict";

var pluck = function(property, arr) {
  var res = [];
  arr.forEach(function(x){
      res.push(x[property]);
  });
  return res;
};

exports.pluck = pluck;

// var students = [{
//   "name" : "Daniel Taskoff",
//   "course" : "Frontend JavaScript"
// }, {
//   "name" : "Elena Jeleva",
//   "course" : "Programming 101"
// }, {
//   "name" : "Luboslava Dimitrova",
//   "course" : "Frontend JavaScript"
// }, {
//   "name" : "Anton Antonov",
//   "course" : "Core Java"
// }, {
//   "name" : "Nikola Dichev",
//   "course" : "Core Java"
// }];

// console.log(pluck("name", students));
