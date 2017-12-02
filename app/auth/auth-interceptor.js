angular.module('myApp').factory('AuthInterceptor', AuthInterceptor);

function AuthInterceptor($location, $q, $window, AuthFactory) {
    return {
        request: request,
        response: response,
        responseError: responseError
    };

    function request(config) {
        config.headers = config.headers || {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        };

        if (AuthFactory.getToken() !== undefined) {
            config.headers.Authorization = AuthFactory.getToken();
        }
        return config;
    }

    function response(response) {
        if (response.status === 401) {
            $window.localStorage.removeItem('myUser');
            $window.localStorage.removeItem('myToken');
            $rootScope.$broadcast('$isUserLoggedIn', false);
        }

        return response;
    }

    function responseError(rejection) {
        return $q.reject(rejection);
    }
}