var app = angular.module('myApp');

app.controller('NavigationController', function ($scope, AuthFactory, LoginService, CONSTANTS, $location) {
    var vm = this;

    vm.loggedInUser = "";

    if (AuthFactory.isLoggedIn()) {
        vm.loggedInUser = AuthFactory.getUser().login;
        vm.isLoggedIn = true;
    }

    vm.logout = function () {
        LoginService.clearUser();
        vm.isLoggedIn = false;
        $location.path('/login');
    };

    $scope.$on(CONSTANTS.EVENT.IS_USER_LOGGED_IN, function (event, args) {
        vm.isLoggedIn = args;
    });
});