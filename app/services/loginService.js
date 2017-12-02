angular.module('myApp').service('LoginService', function ($http, $rootScope, $window, AuthFactory) {

    var doLogin = function (login, password) {
        var user = {
            login: login,
            password: password
        };
        return $http.post('http://localhost:8080/login', user, {

        }).then(function (data) {
            var pToken = data.headers().authorization;
            if (pToken !== undefined) {
                var userInfo = pToken.split('.')[0];
                var baseToken = pToken.split('.')[1];
                var userFromToken = JSON.parse(decodeURIComponent(escape(window.atob(userInfo))));
                AuthFactory.setUser(userFromToken);
                AuthFactory.setToken(baseToken);
                $rootScope.$broadcast('$isUserLoggedIn', true);
            }
            return data;
        }).catch(function (data) {
            clearUser();
            return data;
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