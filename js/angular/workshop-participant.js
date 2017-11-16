var app = angular.module('app',[]);

app.controller('workshopController',function ($scope, $http, $window) {
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

    $scope.saveWorkshopParticipant = function(){
        $http.post('/http://localhost:8080/workshop/save',$scope.participant).then(sukses,gagal);
        function sukses(response){
            $scope.listParticipant();
        }
        function gagal(response){
            console.log('Error : '+response)
        }
    }
})