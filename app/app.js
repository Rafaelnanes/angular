var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toastr']).config(config).run(run);

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
        .when('/user-center', {
            templateUrl: 'app/views/user/center/user-center.html',
            controller: 'UserCenterController',
            controllerAs: 'vm',
            access: {
                restricted: true
            }
        })
        .when('/user-list', {
            templateUrl: 'app/views/user/list/user-list.html',
            controller: 'UserListController',
            controllerAs: 'vm',
            access: {
                restricted: true
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}

function run($rootScope, $location, $window, AuthFactory, CONSTANTS) {

    $rootScope.hasPermission = function (permission) {
        var hasPermission = false;
        var user = AuthFactory.getUser();
        if (!!user) {
            var permissions = user.permissions;
            permissions.forEach(function (obj) {
                if (obj === permission) {
                    hasPermission = true;
                }
            });
        }
        return hasPermission;
    };

    $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
        if (nextRoute.access !== undefined && nextRoute.access.restricted && !AuthFactory.isLoggedIn()) {
            event.preventDefault();
            $location.path('/unauthorized');
        }
    });

}


