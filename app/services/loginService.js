angular.module('myApp').service('LoginService', function ($http, $window, AuthFactory) {

    var doLogin = function (login, password) {
        var user = {
            login: login,
            password: password
        };
        return $http.post('http://localhost:8080/login', user).then(function (data) {
            var pToken = data.headers().authorization;
            if (pToken !== undefined) {
                var base64Url = pToken.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                token = JSON.parse(decodeURIComponent(escape(window.atob(base64))));
                AuthFactory.setToken(token);
            }
        });
    };

    var clearToken = function () {
        $window.localStorage.removeItem('myToken');
    };

    return {
        doLogin: doLogin,
        clearToken: clearToken
    };
});