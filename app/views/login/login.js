var app = angular.module('myApp');
app.controller('LoginController', function ($scope, $http, LoginService, AuthFactory) {
    $scope.user = {};
    $scope.submit = function () {
        LoginService.doLogin($scope.user.login, $scope.user.password).then(function () {
            console.log('tokenLogin', AuthFactory.getToken());
        });
    };

    $scope.clearToken = function () {
        LoginService.clearToken();
        console.log('tokenLogin', AuthFactory.getToken());
    };
});




