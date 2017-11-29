var app = angular.module('myTest', ['ngMockE2E'])

app.run(function ($httpBackend) {
    $httpBackend.whenGET('http://localhost:8080/login').respond({ userId: 'Rafael' });
});

app.controller('indexController', function ($scope, $http) {
    $http.get('http://localhost:8080/login').then(function (data) {
        console.log('data', data);
    });
    $scope.hello = "alow";
});