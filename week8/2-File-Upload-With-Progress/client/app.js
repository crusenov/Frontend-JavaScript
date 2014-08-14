/*global require, console*/
"use strict";

require.config({
  paths: {
    "jquery": "bower_components/jquery/dist/jquery",
    "Q": "bower_components/q/q"
  }
});

require(["jquery", "Q"], function($, Q) {
  console.log($, Q);
  $(function() {
    var doc = document.querySelector("#drop");
    doc.ondragover = function () {
      this.className = 'file-hover';
        return false;
    };

    doc.ondragleave = function() {
      this.className = "";
      return false;
    };

    doc.ondragend = function (event) {
      event.preventDefault && event.preventDefault();
      console.log("On drag end");
      this.className = ''; return false;
    };
    doc.ondrop = function (event) {
      event.preventDefault && event.preventDefault();

      console.log("Drop it like it's hot!");

      this.className = '';

      var files = event.dataTransfer.files;
      console.log(files);

      var formData = new FormData();
      for (var i = 0; i < files.length; i++) {
        formData.append('file', files[i]);
      }

      // now post a new XHR request
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/fileUpload');
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log('all done: ' + xhr.status);
        } else {
          console.log('Something went terribly wrong...');
        }
      };

      xhr.send(formData);

      return false;
    };


  });
});
