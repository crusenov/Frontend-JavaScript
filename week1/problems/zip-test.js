"use strict";

var zip = require("./zip").zip;

exports.TestZip1 = function(test){
  test.deepEqual([ [1, 4], [2, 4], [3, 6] ], zip([1, 2, 3], [4, 5, 6]));
  test.done();
};
