var app = angular.module('myApp');

app.controller('NavigationController', function ($scope, AuthFactory, LoginService) {
    var vm = this;
    vm.isLoggedIn = AuthFactory.isLoggedIn();
    vm.loggedInUser = AuthFactory.getUser().login;

    vm.logout = function () {
        LoginService.clearUser();
        vm.isLoggedIn = false;
    };



    $scope.$on('$isUserLoggedIn', function (event, args) {
        vm.isLoggedIn = args;
    });
});