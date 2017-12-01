angular.module('myApp').factory('AuthFactory', AuthFactory);

function AuthFactory($window) {

    return {
        isLoggedIn: function () {
            return !!this.getUser();
        },
        setToken: function (token) {
            return $window.localStorage.setItem("myToken", token);
        },
        getToken: function () {
            return $window.localStorage.getItem("myToken");
        },
        setUser: function (token) {
            return $window.localStorage.setItem("myUser", JSON.stringify(token));
        },
        getUser: function () {
            var token = $window.localStorage.getItem("myUser");
            if (token !== undefined) {
                token = JSON.parse(token);
            }
            return token;
        }
    };
}