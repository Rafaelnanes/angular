var app = angular.module('myApp');
app.controller('LoginController', function ($scope, $http) {
    $scope.user = {};
    $scope.submit = function () {
        $http.post('http://localhost:8080/login', $scope.user).then(function (data) {
            console.log('data', data);
        });
    };
});




