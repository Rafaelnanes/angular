var app = angular.module('myApp');

app.run(function ($httpBackend) {
    $httpBackend.whenPOST('http://localhost:8080/login').respond({ status: 0 });
});


