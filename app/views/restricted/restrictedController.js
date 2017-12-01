var app = angular.module('myApp');

app.controller('RestrictedController', function ($scope, AuthFactory) {
    var vm = this;
    vm.userSession = AuthFactory.getUser().login;
});