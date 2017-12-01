var app = angular.module('myApp');
app.controller('LoginController', function ($scope, $http, LoginService, AuthFactory) {
    var vm = this;
    vm.user = {};
    vm.submit = function () {
        LoginService.doLogin(vm.user.login, vm.user.password).then(function () {
            console.log('tokenLogin', AuthFactory.getUser());
        });
    };

    vm.clearUser = function () {
        LoginService.clearUser();
        console.log('tokenLogin', AuthFactory.getUser());
    };
});




