app.controller("produtoController", function ($scope,$http) {

    /*$scope.produtos = [
        {descricao:"Camiseta Real Madrid",valor:500.00,url:"https://www.decathlon.co.uk/media/836/8364265/classic_e04465bd305d46b4aa2f4440ba590c4c.jpg"},
        {descricao:"Camiseta Juventos",valor:290.00, url:"https://www.guiadoboleiro.com.br/imagens/o/2017/06/camisa_juventus_2017_18_titular_1.jpg"},
        {descricao:"Camiseta Barcelona",valor:210.00, url:"https://www.guiadoboleiro.com.br/imagens/o/2016/05/uniforme_Barcelona_2016_17_titular_1.jpg"},
        {descricao:"Camiseta Santos",valor:199.00, url:"https://images1.tcdn.com.br/img/img_prod/311840/camisa_kappa_santos_i_2017_libertadores_36087_1_20170524085750.jpg"}
    ];*/

    //$scope.produto = {descricao:"Camiseta 15 de Piracicaba",valor:10.00, url:"http://www.sofutebolbrasil.net/images/produtos/zoom/78666_1/camisa-xv-piracicaba-modelo-ii-retro-1913.jpg"};

    $scope.produto = {};

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
        $http({
            method: 'POST',
            data: $scope.produto,
            url: 'http://localhost:8080/produto'
        }).then(function successCallback(response) {
            $scope.produto = {};
            buscarProdutos();
            window.alert("Salvo com sucesso !");
        }, function errorCallback(response) {
            window.alert("Erro ao salvar o produto");
        });
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

})
