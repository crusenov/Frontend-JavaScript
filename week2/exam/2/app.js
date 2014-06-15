"use strict";

  var milisec = 0,
      timer,
      inputMin = "",
      inputSec = "";

  function format ( val ) {
    return val > 9 ? val : "0" + val;
  }

$(document).ready(function(){

  $("#minutes").on("click", function(){

    var value = $(this).val();

    if(!isNaN(parseInt(value,10))) {
        inputMin += value;
        milisec += 60000;
      }
  });

  $("#seconds").on("click", function(){

    var value = $(this).val();

    if(!isNaN(parseInt(value,10))) {
        inputSec += value;
        milisec += 1000;
      }
  });

  $("#count-up").on("click", function(){

     var target_date = new Date().getTime() + milisec;
     var minutes,
         seconds,
         current_date,
         seconds_left;

     function updateTimer() {

      current_date = new Date().getTime() + milisec;
      seconds_left = ( current_date - target_date ) / 1000;

      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);

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

     var target_date = new Date().getTime() + milisec;
     var minutes,
         seconds;

     function updateTimer() {

      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;

      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);

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
