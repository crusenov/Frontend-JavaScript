"use strict";

var concat = require("./concat").concat;

exports.TestConcat1 = function(test){
  test.equal("asd", concat("as", "d"));
  test.done()
};

 exports.testThrows = function(test) {
  test.throws(function() {
    concat(12, "asd");
  });
  test.done();
};
