"use strict";


var app = angular.module('myApp', ['ngAnimate', 'ui.router', 'ui.materialize']);

app.config(function($stateProvider, $urlRouterProvider) {

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
})

