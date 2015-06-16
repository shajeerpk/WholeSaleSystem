(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.config:uiRouter
     * @description
     * # Config
     * Config for the pages router
     */
     angular.module('dndApp')
      .config(
        ['$stateProvider', '$urlRouterProvider',
          function ( $stateProvider,   $urlRouterProvider ) {
            $stateProvider
              
               .state('home', {
                url: '/home',
                templateUrl: 'angular_modules/home/partials/partial-home.html',
                controller:'PartialHomeCtrl'
              })
              .state('login', {
                url: '/login',
                templateUrl: 'angular_modules/login/partials/partial-login.html',
                controller:'PartialLoginCtrl'
              })
              .state('home.main', {
                url: '/main',
                templateUrl: 'angular_modules/template/views/pages/blank.html'
             })
              .state("otherwise",{
                templateUrl:'angular_modules/login/partials/partial-login.html',
                controller:'PartialLoginCtrl'
              })
            


          }
        ]
      );
}());
