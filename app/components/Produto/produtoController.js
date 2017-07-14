app.controller("produtoController", function ($scope,$http,$location, produtoFactory) {
    $scope.produto = produtoFactory.getProduto();

    var buscarProdutos = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:8080/produto'
        }).then(function successCallback(response) {
            $scope.produtos = response.data;
        }, function errorCallback(response) {
            window.alert("Erro ao buscar os produtos");
        });
    }

    buscarProdutos();

    $scope.salvar =  function () {
        if($scope.produto.id == undefined) {

            $http({
                method: 'POST',
                data: $scope.produto,
                url: 'http://localhost:8080/produto'
            }).then(function successCallback(response) {
                $scope.produto = {};
                produtoFactory.removerProduto();
                buscarProdutos();
                window.alert("Salvo com sucesso !");
            }, function errorCallback(response) {
                window.alert("Erro ao salvar o produto");
            });

        }else{
            editar();
        }
    }


    $scope.remover = function(produto){
        $http({
            method: 'DELETE',
            url: 'http://localhost:8080/produto/'+produto.id
        }).then(function successCallback(response) {
            buscarProdutos();
            window.alert("Removido com sucesso !");
        }, function errorCallback(response) {
            buscarProdutos();
            window.alert("Erro ao remover o produto");
        });
    }

    $scope.editar = function (produto) {
        produtoFactory.set(produto);
        $location.path('produto');
    }

    var editar = function () {
        $http({
            method: 'PUT',
            data: $scope.produto,
            url: 'http://localhost:8080/produto'
        }).then(function successCallback(response) {
            $scope.produto = {};
            produtoFactory.removerProduto();
            buscarProdutos();
            window.alert("Alterado com sucesso !");
        }, function errorCallback(response) {
            window.alert("Erro ao salvar o produto");
        });
    }

})
