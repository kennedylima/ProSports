app.service('produtoService',function (produtoFactory) {
    var produtoService = {};


    produtoService.set = function(produto){
        this.produto = produto;
    }

    produtoService.getProduto = function () {
        return this.produto;
    }

    produtoService.removerProduto = function () {
        this.produto = {};
    }

    produtoService.getProdutos = function (callback) {
        produtoFactory.getProdutos()
            .then(function (response) {
                callback(response,'');
            }, function (errorResponse) {
                callback('',errorResponse);
            })
    }

    
    return produtoService;
})
