'use strict';

/* Controllers */

function VersionInfoCtrl($scope, versionInfo) {
  $scope.version = versionInfo.version;
  $scope.createdAt = versionInfo.createdAt;
}
