var app = angular.module('myApp')

app.controller('RestrictedController', function ($scope, $http) {
    $scope.hello = "authorized";
});