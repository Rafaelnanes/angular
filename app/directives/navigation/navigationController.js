var app = angular.module('myApp');

app.controller('NavigationController', function ($scope, AuthFactory, LoginService, $window) {
    var vm = this;

    vm.loggedInUser = "";

    if (AuthFactory.isLoggedIn()) {
        vm.loggedInUser = AuthFactory.getUser().login;
    }

    vm.logout = function () {
        LoginService.clearToken();
        vm.isLoggedIn = false;
    };

    $scope.$on('$isUserLoggedIn', function (event, args) {
        vm.isLoggedIn = args;
    });
});