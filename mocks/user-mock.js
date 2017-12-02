var app = angular.module('myApp');

app.run(function ($httpBackend) {
    $httpBackend.when('GET', 'http://localhost:8080/user')
        .respond(200, {
            "status": 0,
            "data": [
                {
                    "id": 1,
                    "login": "admin",
                    "password": "21232f297a57a5a743894a0e4a801fc3"
                },
                {
                    "id": 2,
                    "login": "guest",
                    "password": "21232f297a57a5a743894a0e4a801fc3"
                }
            ]
        });
});


