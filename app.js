//'ui.utils',
angular.module('dndApp',[
              'ngAnimate',
              'ngAria',
              'ngMaterial',
              'ui.router',
              'ui.bootstrap',
             // 'easypiechart',
              'ui.tree',
              'ngMap',
              'ngTagsInput',
              'textAngular',
              'angular-loading-bar',
              'duScroll'
             ]);
/*angular.module('dndApp').config(function($stateProvider, $urlRouterProvider) {
   
    // Add New States Above 
    $urlRouterProvider.otherwise('angularModules/template/views/pages/404.html');

});*/

angular.module('dndApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});


