angular.module('dndApp').directive('toggleNavCollapsedMin',['$rootScope', function($rootScope) {
	return {
		restrict: 'A',

		link: function(scope, ele, attrs, fn) {

            var app;

            app = $('#app');

            ele.on('click', function(e) {
                if (app.hasClass('nav-collapsed-min')) {
                    app.removeClass('nav-collapsed-min');
                } else {
                    app.addClass('nav-collapsed-min');
                    $rootScope.$broadcast('nav:reset');
                }
                return e.preventDefault();
            });            
        }
		}

}]);