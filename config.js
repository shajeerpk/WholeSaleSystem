// config

var app =  
angular.module('dndApp')
  /*.config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])*/
  
  .constant('dndConfig',{ //used for storing enviornment variables

     "AWS": "http://127.0.0.1:3000/",//local
    //"AWS": "http://services.baabtra.com/",//server - production
    // "AWS": "http://server.mb-test.in/",//server-test
    
 });



