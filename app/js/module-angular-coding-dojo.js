angular
  .module('angular-coding-dojo', [])

  .value('versionInfo', { version: "v0.1", createdAt: "18.09.2013"} )

  .controller('PhoneListCtrl', PhoneListCtrl)
  //.controller('VersionInfoCtrl', VersionInfoCtrl)
