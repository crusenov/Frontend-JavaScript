/*global $, console*/
"use strict";

var canvasWidth = $("#canvas").width();
var canvasHeight = $("#canvas").height();
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var trianglePoints = [],
    images = [],
    name,
    imageToLoad,
    fillColor = "#000000";

function Point(x, y, ctx){

  this.x = x;
  this.y = y;
  this.ctx = ctx;
}

function drawTriangle(pointA, pointB, pointC){

      context.beginPath();
      context.moveTo(pointA.x, pointA.y);
      context.lineTo(pointB.x, pointB.y);
      context.lineTo(pointC.x, pointC.y);
      context.closePath();
      context.fillStyle = fillColor;
      context.fill();
}

var getImagesFromLS = function(){

  for (var i = 0; i < localStorage.length; i++){
    images.push(localStorage.key(i));
  }
};

var loadSavedImages = function(){

  images.forEach(function(name){
      var html = ("<option value=" + name + ">" + name + "</option>");
      $("#saved-images").append(html);
    });
};

$(document).ready(function(){

  getImagesFromLS();
  loadSavedImages();

  $(document).on("change", "#color-input", function(){
    fillColor = this.value;
  });

  $(document).on("click", "#canvas", function(e){

    var x;
    var y;
    if (e.pageX || e.pageY) {
      x = e.pageX;
      y = e.pageY;
    }
    else {
      x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    var point = new Point(x, y, context);
    trianglePoints.push(point);

    if(trianglePoints.length == 3){
      drawTriangle(trianglePoints[0], trianglePoints[1], trianglePoints[2]);
      trianglePoints = [];
    }

  });

  $(document).on("click", "#btn-clear-canvas", function(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
  });

  $(document).on("click", "#btn-save-canvas", function(){

    var name = prompt("Enter the picture name:");
    var imgAsDataURL = canvas.toDataURL();

    try {
        localStorage.setItem(name, imgAsDataURL);
    }
    catch (e) {
        prompt("Storage failed: " + e);
    }

    $("#saved-images").empty();
    loadSavedImages();
  });

  $(document).on("click", "#saved-images", function(){

    imageToLoad = $(this).val();
  });

  $(document).on("click", "#btn-load-canvas", function(){

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    var img = new Image();
    img.onload = function(){
      context.drawImage(img,0,0);
    };
    img.src = localStorage.getItem(imageToLoad);
  });
});
