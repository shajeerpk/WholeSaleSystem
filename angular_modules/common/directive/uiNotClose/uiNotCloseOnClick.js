angular.module('dndApp').directive('uiNotCloseOnClick', function() {
	return {
		restrict: 'A',
		link: function(scope, ele, attrs, fn) {

           return ele.on('click', function(event) {
                    event.stopPropagation();
                });
		}
	};
});