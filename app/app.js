var app = angular.module('myApp', ['ngRoute']).config(config).run(run);

function config($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/restricted', {
            templateUrl: 'app/views/restricted/restricted.html',
            controller: 'RestrictedController',
            controllerAs: 'vm',
            access: {
                restricted: true
            }
        })
        .when('/unauthorized', {
            templateUrl: 'app/views/unauthorized/unauthorized.html',
            controller: 'UnauthorizedController',
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .when('/login', {
            templateUrl: 'app/views/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}

function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
        if (nextRoute.access !== undefined && nextRoute.access.restricted && !AuthFactory.isLoggedIn()) {
            event.preventDefault();
            $location.path('/unauthorized');
        }
    });

}
