'use strict';

angular.module('pocAngularfsApp')
  .config(function ($stateProvider) {
    $stateProvider
        .state('interests', {
            url: '/interests',
            templateUrl: 'app/interests/interests.html',
            controller: 'InterestsController',
            controllerAs: 'vm'            
        });
  });