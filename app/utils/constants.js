angular.module('myApp').constant('CONSTANTS', {

    PERMISSIONS: [
        'user.info',
        'user.operation'
    ],
    LOCAL_STORAGE: {
        TOKEN: 'myToken',
        USER: 'myUSer'
    },
    EVENT: {
        IS_USER_LOGGED_IN: '$isUserLoggedIn'
    }

});
