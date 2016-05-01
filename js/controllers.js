"use strict";

var app = angular.module('myApp');

app.controller('homeCtrl', function($scope, $interval, $location, $anchorScroll, $timeout, AudioService) {
	$scope.toggle = true;
	var interval; 
	$scope.backgroundCrisis = function(){
		// AudioService.play('/music/guile.mp3');
		$scope.sho = true;
		// interval = $interval(function() {
		// 	var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		// 	$('body').css({
		// 		backgroundColor: randomColor
		// 	});
		// }, 200);

	}

	$scope.backgroundEnd = function(){
		// $interval.cancel(interval);
		// AudioService.pause('/music/guile.mp3');
	}

	$scope.continue = function(){
		$scope.backgroundEnd();
		$scope.showAbout = true;
		$timeout(function(){
			var about = document.getElementById("about")
			zenscroll.to(about)
		}, 0);
	}


	$scope.buttonCrisis = function(){
		interval = $interval(function() {
			var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
			$('#moarmusique').css({
				backgroundColor: randomColor
			});
		}, 200);
	}

	$scope.buttonEnd = function(){
		$interval.cancel(interval);
	}

});

app.controller('projectsCtrl', function($scope){
	console.log('projects!');
})