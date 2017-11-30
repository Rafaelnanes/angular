var app = angular.module('myApp');

app.requires.push('ngMockE2E');
app.run(function ($httpBackend) {
    $httpBackend.whenGET(/app\/views\/.*/).passThrough();
});
