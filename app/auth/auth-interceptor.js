angular.module('myApp').factory('AuthInterceptor', AuthInterceptor);

function AuthInterceptor($location, $q, $window, AuthFactory) {
    return {
        request: request,
        response: response,
        responseError: responseError
    };

    function request(config) {
        config.headers = config.headers || {};
        if (AuthFactory.getToken() !== undefined) {
            config.headers.Authorization = 'Bearer ' + AuthFactory.getToken();
        }
        return config;
    }

    function response(response) {
        return response;
    }

    function responseError(rejection) {
        return $q.reject(rejection);
    }
}