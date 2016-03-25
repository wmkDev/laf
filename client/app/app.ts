'use strict';

angular.module('pocAngularfsApp', [
  'pocAngularfsApp.auth',
  'pocAngularfsApp.admin',
  'pocAngularfsApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
