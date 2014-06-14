"use strict";

function Pizza(name, cost, timeToMake){

  if(!(this instanceof Pizza)){
    return new Pizza(name, cost, timeToMake);
  }

  this.getName = function(){
    return name;
  };

  this.getCost = function(){
    return cost;
  };

  this.getTimeToMake = function(){
    return timeToMake;
  };
}

function PizzaOrder(pizza){

  if (!(this instanceof PizzaOrder)) {
     return new PizzaOrder(pizza);
    }
  if (!(pizza instanceof Pizza)) {
     throw new TypeError("Should be Point object!");
  }

  var id;
  this.getId = function(){
    return id;
  };
};
