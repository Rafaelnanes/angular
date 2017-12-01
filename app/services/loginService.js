angular.module('myApp').service('LoginService', function ($http, $rootScope, $window, AuthFactory) {

    var doLogin = function (login, password) {
        var user = {
            login: login,
            password: password
        };
        return $http.post('http://localhost:8080/login', user).then(function (data) {
            var pToken = data.headers().authorization;
            if (pToken !== undefined) {
                var token = pToken.split('.')[0];
                var base64Url = pToken.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                var userFromToken = JSON.parse(decodeURIComponent(escape(window.atob(base64))));
                AuthFactory.setUser(userFromToken);
                $rootScope.$broadcast('$isUserLoggedIn', true);
            }
        });
    };

    var clearUser = function () {
        $window.localStorage.removeItem('myUser');
        $window.localStorage.removeItem('myToken');
        $rootScope.$broadcast('$isUserLoggedIn', false);
    };

    return {
        doLogin: doLogin,
        clearUser: clearUser
    };
});