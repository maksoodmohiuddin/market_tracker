(function () {
    'use strict';

    var marketSimulatorControllers = angular.module('marketSimulator.controllers', []);

    marketSimulatorControllers.controller('DashCtrl',
        function ($scope) {
        });

    marketSimulatorControllers.controller('StocksCtrl',
        function ($scope, StocksService) {
            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            $scope.stocks = StocksService.all();
        });

    marketSimulatorControllers.controller('StockDetailCtrl',
        function ($scope, $stateParams, StocksService) {
            $scope.stock = StocksService.get($stateParams.stockSymbol);
        });

    marketSimulatorControllers.controller('AccountCtrl',
        function ($scope) {
            $scope.settings = {
                fetchLatest: false
            };
        });
})();
