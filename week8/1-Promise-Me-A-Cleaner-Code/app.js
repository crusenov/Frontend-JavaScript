/*global require, console*/
"use strict";

require.config({
  paths: {
    "Q": "bower_components/q/q"
  }
});

require(["Q"], function(Q) {

  function first() {
    var defer = Q.defer();
    setTimeout(function(){
      defer.resolve(["Function one"]);
      }, 1000);

    return defer.promise;
  }

  function second(soFar) {
    var defer = Q.defer();
    setTimeout(function(){
      defer.resolve(soFar.concat("Function two"));
    }, 1000);

    return defer.promise;
  }

  function third(soFar) {
    var defer = Q.defer();
    defer.resolve(soFar.concat("I should do the job after first and second"));

    return defer.promise;
  }

  Q.fcall(first)
   .then(second)
   .then(third)
   //.then(console.log.bind(console))
   .then(function(result){
      result.forEach(function(singleResult){
        console.log(singleResult);
      });
   })
   .done();

});
