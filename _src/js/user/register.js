var app = angular.module('noteSth');
app.controller('register', ['$scope', 'dataS', '$location',

    function($scope, dataS, $location) {

        $scope.registerdo = function() {
                dataS.postData('/user', $scope.login)
                .success(function(data) {
                    $location.path('/login');
                })

        }
    }
]);