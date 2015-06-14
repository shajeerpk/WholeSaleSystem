angular.module('dndApp').directive('slimScroll', function() {
	return {
		restrict: 'A',
		link: function(scope, ele, attrs, fn) {

            return ele.slimScroll({
                    height: attrs.scrollHeight || '100%'
                });
		}
	};
});