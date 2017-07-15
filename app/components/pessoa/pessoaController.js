app.controller("pessoaController", function ($scope, $http) {
    $scope.pessoa ={};

    $scope.salvar = function () {
        $http({
            method: 'POST',
            data: $scope.pessoa,
            url: 'http://localhost:8080/pessoa'
        }).then(function successCallback(response) {
            $scope.pessoa = {};
            window.alert("Salvo com sucesso !");
        }, function errorCallback(response) {
            window.alert("Erro ao salvar o produto");
        });
    }
})