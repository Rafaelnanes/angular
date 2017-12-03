var app = angular.module('myApp');

app.run(function ($httpBackend) {
    $httpBackend.when('POST', 'http://localhost:8080/login')
        .respond(200, { status: 0 }, { 'authorization': "eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsInByb2ZpbGVJZCI6MSwicGVybWlzc2lvbnMiOlsidXNlci5vcGVyYXRpb24iLCJ1c2VyLmluZm8iXX0=||eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTEyMzAyNTY5LCJleHAiOjE1MTIzMDYxNjl9.qOJz4oeMd1q8P8_Gzd3nRTxuE0c6NhO7mEbCTiF-ozU" });
});


