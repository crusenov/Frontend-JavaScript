"use strict";

var pluck = require("./pluck").pluck;

exports.TestPluck1 = function(test){

  var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}];

  var result = [
  "Daniel Taskoff",
  "Elena Jeleva",
  "Luboslava Dimitrova",
  "Anton Antonov",
  "Nikola Dichev"];
  test.deepEqual(result, pluck(students));
  test.done();
};
