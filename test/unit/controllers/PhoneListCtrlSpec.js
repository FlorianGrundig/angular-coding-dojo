'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function () {

  describe('PhoneListCtrl', function () {
    var phoneService,
      scope = {};

    beforeEach(function() {
      phoneService = jasmine.createSpyObj('PhoneServiceMock',['getPhoneList'])

    });

    it('should save result of PhoneService to $scope.phones', function () {
      var somePhones = {phone: 'foo'};
      phoneService.getPhoneList.andReturn(somePhones);

      PhoneListCtrl(scope, phoneService);

      expect(scope.phones).toBe(somePhones);
    });
  });
});
