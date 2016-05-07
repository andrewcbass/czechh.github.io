"use strict";
(function(){
angular
  .module('myApp', [
    'ngAnimate', 
    'ui.router', 
    'ui.materialize'])
  .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "html/home.html",
      controller: "homeCtrl"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "html/projects.html",
      controller: "projectsCtrl"
    })
  $urlRouterProvider.otherwise("/");
}

})();