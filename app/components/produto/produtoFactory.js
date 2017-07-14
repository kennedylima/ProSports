app.factory('produtoFactory',function () {
    var produtoFatory = {};


    produtoFatory.set = function(produto){
        this.produto = produto;
    }

    produtoFatory.getProduto = function () {
        return this.produto;
    }

    produtoFatory.removerProduto = function () {
        this.produto = {};
    }

    
    return produtoFatory;
})
