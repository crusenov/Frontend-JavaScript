"use strict";

function any(pred, arr) {
  for(var i = 0, n = arr.length; i < n; i ++) {
    if(pred(arr[i])) {
      return true;
    }
  }
  return false;
}

function all(pred, arr) {
  for(var i = 0, n = arr.length; i < n; i ++) {
    if(!pred(arr[i])) {
      return false;
    }
  }
  return true;
}


