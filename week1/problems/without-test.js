"use strict";

var without = require("./without").without;

exports.TestWithout1 = function(test){
  test.deepEqual([ 2, 3, 4, 7, 8 ], without([5,6,9,1], [1,2,3,4,5,6,7,8,9]));
  test.done();
};
