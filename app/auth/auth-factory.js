angular.module('myApp').factory('AuthFactory', AuthFactory);

function AuthFactory($window) {

    return {
        isLoggedIn: function () {
            return !!this.getToken();
        },
        setToken: function (token) {
            return $window.localStorage.setItem("myToken", JSON.stringify(token));
        },
        getToken: function () {
            var token = $window.localStorage.getItem("myToken");
            if (token === undefined) {
                token = JSON.parse(token);
            }
            return token;
        }
    };
}