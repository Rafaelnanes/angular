angular.module('myApp').service('UserService', function ($http, $rootScope, $window, AuthFactory) {

    var getUsers = function () {
        return $http.get('http://localhost:8080/user').then(function (response) {
            return response.data;
        });
    };

    return {
        getUsers: getUsers
    };
});