var app = angular.module('myApp')

app.controller('UnauthorizedController', function ($scope, $http) {
    $scope.hello = "unauthorized";
});