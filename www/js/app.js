(function () {
    'use strict';

    var marketSimulator = angular.module('marketSimulator', [
        'ionic',
        'marketSimulator.controllers',
        'marketSimulator.services'
    ]);

    marketSimulator.run(['$ionicPlatform',
        function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        }
    ]);

    marketSimulator.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

            // setup an abstract state for the tabs directive
              .state('tab', {
                  url: '/tab',
                  abstract: true,
                  templateUrl: 'templates/tabs.html'
              })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.stocks', {
                url: '/stocks',
                views: {
                    'tab-stocks': {
                        templateUrl: 'templates/tab-stocks.html',
                        controller: 'StocksCtrl'
                    }
                }
            })
              .state('tab.stock-detail', {
                  url: '/stocks/:stockSymbol',
                  views: {
                      'tab-stocks': {
                          templateUrl: 'templates/stock-detail.html',
                          controller: 'StockDetailCtrl'
                      }
                  }
              })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/dash');

        }]);
})();

