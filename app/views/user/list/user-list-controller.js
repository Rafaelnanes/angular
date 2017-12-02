var app = angular.module('myApp');

app.controller('UserListController', function ($scope, UserService) {
    var vm = this;

    var getUsers = function () {
        UserService.getUsers().then(function (resp) {
            vm.users = resp.data;
        });
    };

    getUsers();

});