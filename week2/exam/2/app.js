"use strict";

  var milisec = 0,
      timer,
      inputMin,
      inputSec;

  function format ( val ) {
    return val > 9 ? val : "0" + val;
  }

$(document).ready(function(){

  $("#count-up").on("click", function(){

    inputMin = $("#minutes").val();
    inputSec = $("#seconds").val();
    milisec = inputMin * 60000 + inputSec * 1000;

     var targetDate = new Date().getTime() + milisec;
     var minutes,
         seconds,
         currentDate,
         secondsLeft;

     function updateTimer() {

      currentDate = new Date().getTime() + milisec;
      secondsLeft = ( currentDate - targetDate ) / 1000;


      minutes = parseInt(secondsLeft / 60);
      seconds = parseInt(secondsLeft % 60);

      var update = document.getElementById("timer");
      update.innerHTML = format(minutes) + " : " + format(seconds);
     }

     var timerUp = setInterval(updateTimer, 500);
     timer = timerUp;

     function stopUpdate(){
      clearInterval(timerUp);
     }

     setTimeout(stopUpdate, milisec+1000);
  });

  $("#count-down").on("click", function(){

    inputMin = $("#minutes").val();
    inputSec = $("#seconds").val();
    milisec = inputMin * 60000 + inputSec * 1000;

     var targetDate = new Date().getTime() + milisec;
     var minutes,
         seconds,
         currentDate,
         secondsLeft;

     function updateTimer() {

      currentDate = new Date().getTime();
      secondsLeft = (targetDate - currentDate) / 1000;

      minutes = parseInt(secondsLeft / 60);
      seconds = parseInt(secondsLeft % 60);

      var update = document.getElementById("timer");
      update.innerHTML = format(minutes) + " : " + format(seconds);
     }

     var timerDown = setInterval(updateTimer, 500);
     timer = timerDown;

     function stopUpdate(){
      clearInterval(timerDown);
     }

     setTimeout(stopUpdate, milisec);
  });

  $("#stop-reset").on("click", function(){

    clearInterval(timer);
    var update = document.getElementById("timer");
    update.innerHTML = "00 : 00";
  });

});
