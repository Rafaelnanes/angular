angular.module('myApp').factory('AuthInterceptor', AuthInterceptor);

function AuthInterceptor($location, $q, $window, AuthFactory, CONSTANTS) {
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
            localStorage.removeItem('myUser');
            localStorage.removeItem('myToken');
            $rootScope.$broadcast(CONSTANTS.EVENT.IS_USER_LOGGED_IN, false);
        }

        return response;
    }

    function responseError(rejection) {
        return $q.reject(rejection);
    }
}