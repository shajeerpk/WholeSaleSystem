angular.module('dndApp').directive('toggleOffCanvas', function() {
	return {
		restrict: 'A',
		link: function(scope, ele, attrs, fn) {

           ele.on('click', function() {
                return $('#app').toggleClass('on-canvas');
            });         
		}
	};
});