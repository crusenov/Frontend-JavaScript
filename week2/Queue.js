"use strict";

var queue = {
  arr: [],

  push: function(item){
    this.arr.push(item);
  },

  pop: function(){
    this.arr.shift();
  },

  isEmpty: function(){
    return this.arr.length === 0;
  }
};

queue.push(4);
queue.push(5);
queue.push(6);
queue.pop();
console.log(queue.isEmpty());
