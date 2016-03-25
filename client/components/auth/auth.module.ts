'use strict';

angular.module('pocAngularfsApp.auth', [
  'pocAngularfsApp.constants',
  'pocAngularfsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
