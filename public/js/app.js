var app = angular.module('QRService', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./public/views/home.html",
      controller: "homeController"
    });
});