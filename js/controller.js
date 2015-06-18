angular.module('app',[])
    .controller('MyController', ['$scope','$http',function($scope, $http ){

        $scope.text = "empty";

        $http.post('/server.php',{key: 'val'})
            .success(function(data) {
                $scope.text = data.key;
            });
    }]);
