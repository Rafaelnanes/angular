var app = angular.module('myApp');

app.run(function ($httpBackend) {
    $httpBackend.when('POST', 'http://localhost:8080/login')
        .respond(200, { status: 0 }, { 'authorization': "eyJpZCI6MSwibG9naW4iOiJhZG1pbiIsInBlcm1pc3Npb25zIjpbInVzZXIuaW5zZXJ0IiwidXNlci5saXN0Il19.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTEyMjMzMzg1LCJleHAiOjE1MTIyMzY5ODV9.BzPasCZMae_qoWU_FskRDsyRsqttWxgPIcQXmsrfz-k" })
});


