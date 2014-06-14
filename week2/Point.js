"use strict";

function Point(x, y){

  if(!(this instanceof Point)){
    return new Point(x,y);
  }

  this.getX = function(){
    return x;
  };

  this.getY = function() {
    return y;
  };

  // this.setX = function(n){
  //    return x+n;
  // };

  // this.setY = function(n){
  //   return y+n;
  // };

  this.xInc = function(){
    x++;
  };

  this.xDec = function(){
    x--;
  };

  this.yInc = function(){
    y++;
  };

  this.yDec = function(){
    y--;
  };
}

Point.prototype.equals = function(point){
  return this.getX() === point.getX() && this.getY() === point.getY();
};

Point.prototype.toString = function(){
  return ["Point @ {", this.getX().toString(), "}, {", this.getY().toString(), "}"].join("");
};

// var point = new Point(3,10);
// point.xInc();
// console.log(point.toString());

function Robot(point){

  this.getPosition = function(){
    return point;
  };

}


Robot.prototype.moveLeft = function(amount){
  while(amount > 0){
    this.getPosition().xDec();
    amount--;
  }
};

Robot.prototype.moveRight = function(amount){
  while(amount > 0){
    this.getPosition().xInc();
    amount--;
  }
};

Robot.prototype.moveUp = function(amount){
  while(amount > 0){
    this.getPosition().yDec();
    amount--;
  }
};

Robot.prototype.moveDown = function(amount){
  while(amount > 0){
    this.getPosition().yInc();
    amount--;
  }
};

var robot = new Robot(new Point(0,0));
robot.moveLeft(10);
robot.moveDown(5);
console.log(robot.getPosition().toString());
