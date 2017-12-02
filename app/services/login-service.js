angular.module('myApp').service('LoginService', function ($http, $rootScope, $window, AuthFactory, CONSTANTS) {

    var doLogin = function (login, password) {
        var user = {
            login: login,
            password: password
        };
        return $http.post('http://localhost:8080/login', user, {

        }).then(function (data) {
            var pToken = data.headers().authorization;
            if (pToken !== undefined) {
                var userInfo = pToken.split('||')[0];
                var baseToken = pToken.split('||')[1];
                var userFromToken = JSON.parse(decodeURIComponent(escape(window.atob(userInfo))));
                AuthFactory.setUser(userFromToken);
                AuthFactory.setToken(baseToken);
                $rootScope.$broadcast(CONSTANTS.EVENT.IS_USER_LOGGED_IN, true);
            }
            return data;
        }).catch(function (data) {
            clearUser();
            return data;
        });
    };

    var clearUser = function () {
        localStorage.removeItem(CONSTANTS.LOCAL_STORAGE.USER);
        localStorage.removeItem(CONSTANTS.LOCAL_STORAGE.TOKEN);
        $rootScope.$broadcast(CONSTANTS.EVENT.IS_USER_LOGGED_IN, false);
    };

    return {
        doLogin: doLogin,
        clearUser: clearUser
    };
});