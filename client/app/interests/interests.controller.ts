'use strict';

class InterestsController {
  constructor(Auth, $state) {
    this.interests = [];
  }
  $onInit() {
      this.$http.get('/api/interests').then(response => {
          console.log(response);
          this.interests = response.data;
      });
  }
}

angular.module('pocAngularfsApp')
    .controller('InterestsController', InterestsController);
