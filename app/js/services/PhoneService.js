'use strict';


function PhoneService($http) {


  function getPhoneList() {
    return $http.get('phones/phones.json');
  }

  return {
    getPhoneList: getPhoneList
  }

}
