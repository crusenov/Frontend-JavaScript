/*global require, console*/
"use strict";

require(["matrix", "matrixoperation"], function(Matrix, MatrixOperation) {

  var m = new Matrix(2, 5);
  m.setRow(0, [1,2,3,4,5]);
  m.setRow(1, [6,7,8,9,10 ]);
  m.setAt(0, 0, 0);

  var M2 = new Matrix(2, 5);
  var op = new MatrixOperation();
  var newM = op.createFromArray([[1,2,3,4,5],[6,7,8,9,10]]);
  var transpose = op.scalarMult(newM, 3);
  console.log(transpose.toString());
});
