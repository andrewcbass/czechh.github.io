"use strict";


var app = angular.module('myApp');


app.factory('AudioService',function ($document) {
  var audioElement = $document[0].createElement('audio'); // <-- Magic trick here
  return {
    audioElement: audioElement,

    play: function(filename) {
        audioElement.src = filename;
        audioElement.play();     //  <-- Thats all you need
    },
    // Exersise for the reader - extend this service to include other functions
    // like pausing, etc, etc.
    pause: function(filename) {
        audioElement.src = filename;
        audioElement.pause();     //  <-- Thats all you need
    }
  }
});