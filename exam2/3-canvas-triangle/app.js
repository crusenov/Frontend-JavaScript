/*global $, console, prompt, Handlebars*/
"use strict";

var canvasWidth = $("#canvas").width(),
    canvasHeight = $("#canvas").height(),
    canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

var trianglePoints = [],
    images = [],
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

function clickCoordinate(e){
  var x,
      y,
      point;
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

    point = new Point(x, y, context);
    trianglePoints.push(point);

    if(trianglePoints.length == 3){
      drawTriangle(trianglePoints[0], trianglePoints[1], trianglePoints[2]);
      trianglePoints = [];
    }
}

function getImagesFromLS() {
    var saves = {} || JSON.parse(localStorage.saves);
    Object.keys(saves).forEach(function(name) {
      images.push({name: name});
    });
}

var loadSavedImages = function(data){

  var source = $("#save-template").html(),
      template = Handlebars.compile(source),
      context = {save: data};
  $("#saved-images").append(template(context));
};

$(document).ready(function(){

  getImagesFromLS();
  loadSavedImages(images);

  $(document).on("click", "#canvas", function(e){

    clickCoordinate(e);
  });

  $(document).on("change", "#color-input", function(){
    fillColor = this.value;
  });

  $(document).on("click", "#btn-clear-canvas", function(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
  });

  $(document).on("click", "#btn-save-canvas", function(){

    var name = prompt("Enter the picture name:");

    try {
        if(!localStorage.saves){
          localStorage.saves = JSON.stringify({});
        }
        var saves = JSON.parse(localStorage.saves);
        saves[name] = canvas.toDataURL();
        localStorage.saves = JSON.stringify(saves);
        images.push({"name": name});
    }
    catch (e) {
        prompt("Storage failed: " + e);
    }

    $("#saved-images").empty();
    loadSavedImages(images);
  });

  $(document).on("click", "#saved-images", function(){

    imageToLoad = this.value;
  });

  $(document).on("click", "#btn-load-canvas", function(){

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    var img = new Image(),
        saves = JSON.parse(localStorage.saves);
    img.onload = function(){
      context.drawImage(img,0,0);
    };
    img.src = saves[imageToLoad];
  });
});
