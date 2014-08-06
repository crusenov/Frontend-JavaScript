/*global define, alert, console*/
"use strict";

define(function(){
  function Matrix(n, m){

    var i = 0,
        j = 0;
    var matrix = new Array(n);
    for (i; i < n; i++) {
      matrix[i] = new Array(m);
    }

    for(i; i < n; i++){
      for(j; j < m; j++){
        matrix[i][j] = 0;
      }
    }

    this.getN = function(){
      return n;
    };

    this.getM = function(){
      return m;
    };

    this.getRow = function(index){
      return matrix[index].slice(0);
    };

    this.getCol = function(index){
      var col = [];
        for(var j = 0; j < n; j++){
          col.push(matrix[j][index]);
        }

      return col;
    };

    this.setRow = function(index, row){
      if(index === n+1){
        n += 1;
        matrix.push(row);
      }
      if(index < 0 || index > n + 1){
        alert("The index is wrong!");
      } else {
        matrix[index] = row;
      }

    };

    this.setCol = function(index, col){
      if(index === m+1){
        m += 1;
        for(var i  = 0; i < n; i++)
          matrix.push(col[i]);
      }
      if(index < 0 || index > m+1){
        alert("The index is wrong!");
      } else {
          for(var j = 0; j < n; j++){
              matrix[j][index] = col[j];
            }
      }
    };

    this.getAt = function(i, j){
      return matrix[i][j];
    };

    this.setAt = function(i, j, value){
      matrix[i][j] = value;
    };

    this.getData = function(){
      return matrix.slice(0);
    };

    this.toString = function(){
      var beautifulMatrix = "";
      var i = 0;
      for(i; i < n; i++){
        beautifulMatrix += matrix[i].toString();
        beautifulMatrix += "\n";
      }
      return beautifulMatrix;
    };
  }
  return Matrix;
});
