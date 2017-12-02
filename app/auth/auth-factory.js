angular.module('myApp').factory('AuthFactory', AuthFactory);

function AuthFactory(CONSTANTS) {

    return {
        isLoggedIn: function () {
            return !!this.getUser();
        },
        setToken: function (token) {
            return localStorage.setItem(CONSTANTS.LOCAL_STORAGE.TOKEN, token);
        },
        getToken: function () {
            return localStorage.getItem(CONSTANTS.LOCAL_STORAGE.TOKEN);
        },
        setUser: function (token) {
            return localStorage.setItem(CONSTANTS.LOCAL_STORAGE.USER, JSON.stringify(token));
        },
        getUser: function () {
            var token = localStorage.getItem(CONSTANTS.LOCAL_STORAGE.USER);
            if (token !== undefined) {
                token = JSON.parse(token);
            }
            return token;
        }
    };
}