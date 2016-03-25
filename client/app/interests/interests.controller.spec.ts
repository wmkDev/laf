'use strict';

describe('Component: InterestsComponent', function () {

  // load the controller's module
  beforeEach(module('pocAngularfsApp'));

  var InterestsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    InterestsComponent = $componentController('InterestsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
