/*global define, alert*/
"use strict";

define(["matrix"], function(Matrix){

  function MatrixOperation(){

    this.createFromArray = function(data){
      var i = 0,
          n = data.length,
          m = data[0].length;
          var resultMatrix = new Matrix(n, m);
      for(i; i < n; i++)
        resultMatrix.setRow(i, data[i]);
      return resultMatrix;
    };

    this.transpose = function(M){
      var listM = M.getData(),
          resultMatrix = listM[0].map(function(col, i) {
        return listM.map(function(row) {
          return row[i];
        });
      });
      return this.createFromArray(resultMatrix);
    };

    this.add = function(M1, M2){
      if( M1.getN() !== M2.getN() || M1.getM() !== M2.getM() ){
        alert("These matrices can't be collected!");
      } else {
        var listM1 = M1.getData(),
            listM2 = M2.getData(),
            n = listM1.length,
            m = listM1[0].length,
            resultMatrix = new Matrix(n, m);
        resultMatrix = resultMatrix.getData();
        for(var i = 0; i < n; i++){
          for(var j = 0; j < m; j++){
            resultMatrix[i][j] = listM1[i][j] + listM2[i][j];
          }
        }
        return this.createFromArray(resultMatrix);
      }
     };

     this.scalarMult = function(M1, scalar){
       var listM1 = M1.getData(),
            n = listM1.length,
            m = listM1[0].length,
           resultMatrix = new Matrix(n, m);
       resultMatrix = resultMatrix.getData();
       for(var i = 0; i < n; i++){
           for(var j = 0; j < m; j++){
             resultMatrix[i][j] = scalar * listM1[i][j];
           }
       }
       return this.createFromArray(resultMatrix);
     };

     this.multiply = function(M1, M2){

     };

  }
    return MatrixOperation;

});
