app.controller('loginController', function($scope, $state) {
    $scope.loginForm={username:""};

    $scope.login = function() {
$state.go('dashboard');
    };
})