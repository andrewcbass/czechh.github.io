(function(){
  angular
    .module('myApp')
    .factory('AudioService', AudioService)
  AudioService.$inject = ['$document'];
  function AudioService($document){
    var audioElement = $document[0].createElement('audio');
    return {
      audioElement: audioElement,

      play: function(filename) {
          audioElement.src = filename;
          audioElement.play();
      },

      pause: function(filename) {
          audioElement.src = filename;
          audioElement.pause();
      }
    }
  }
})();