var app = angular.module('app',[]);

app.controller('workshopController',function ($scope, $http, $window, Base64) {
    $scope.daftarParticipant = {};

    $scope.listParticipant = function(){
        $http.get('http://localhost:8080/workshop/all').then(sukses,gagal);
        function sukses(response) {
            $scope.daftarParticipant = response.data;
            console.log('Response : '+response);
        }
        function gagal(response) {
            console.log('Error : '+response);
        }
    };
    $scope.listParticipant();

})