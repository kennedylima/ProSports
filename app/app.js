var app = angular.module("app",['ngMaterial','ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/produto", {templateUrl:'app/components/produto/produto.html', controller:'produtoController'})
        .when("/produtos", {templateUrl:'app/components/produto/produtos.html', controller:'produtoController'})
        .otherwise({redirectTo:'index.html'});

    $locationProvider.html5Mode(true);
})