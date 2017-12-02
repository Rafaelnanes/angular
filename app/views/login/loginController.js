var app = angular.module('myApp');
app.controller('LoginController', function ($scope, $location, $window, LoginService, AuthFactory, toastr) {
    var vm = this;
    vm.user = {};

    vm.submit = function () {
        LoginService.doLogin(vm.user.login, vm.user.password).then(function (data) {
            if (data.status == 200) {
                console.log('Login success:', AuthFactory.getUser());
                $location.path('/main');
            } else {
                toastr.error('Login error');
                vm.clearUser();
            }
        }).catch(function (data) {
            toastr.error('Login error');
            vm.clearUser();
        });
    };

    vm.clearUser = function () {
        LoginService.clearUser();
    };

    vm.clearUser();
});




