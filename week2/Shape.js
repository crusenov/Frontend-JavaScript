"use strict";

function Shape(type) {

  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!");
};

function Rectangle(type, a, b){

  Shape.call(this, type, a ,b);

  this.getA = function(){
    return a;
  };

  this.getB = function(){
    return b;
  };
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getType = function(){
  return Shape.prototype.getType.call(this);
};

Rectangle.prototype.area = function() {
  return "The area is:" + (this.getA() * this.getB());
};

function Triangle(type, a, hA){
  Shape.call(this, type, a, hA);

  this.getA = function(){
    return a;
  };

  this.getHa = function(){
    return hA;
  };
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getType = function() {
  return Shape.prototype.getType.call(this);
};

Triangle.prototype.area = function() {
  return "The area is:" + ( (this.getA() * this.getHa()) / 2 );
};

function Circle(type, r){
  Shape.call(this, type, r);

  this.getR = function(){
    return r;
  };
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getType = function(){
  return Shape.prototype.getType.call(this);
};

Circle.prototype.area = function() {
  return "The area is:" + (Math.PI * this.getR() * this.getR());
};

var rec = new Rectangle("rectangle", 4, 3);
console.log(rec.getType());

var tri = new Triangle("triangle", 10, 7);
console.log(tri.area());

var circ = new Circle("circle", 7);
console.log(circ.area());
