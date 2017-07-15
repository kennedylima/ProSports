app.factory("produtoFactory", function ($http, $q) {

    this.getProdutos = function () {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8080/produto'
        }).then(function successCallback(response) {

            defer.resolve(response);

        }, function errorCallback(response) {

            defer.reject(response);
        });

        return defer.promise;
    }


    return this;
})
