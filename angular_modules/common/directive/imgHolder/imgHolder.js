angular.module('dndApp').directive('imgHolder', function() {
	return {
		restrict: 'A',
		link: function(scope, ele, attrs, fn) {

           return Holder.run({
                    images: ele[0]
                });
		}
	};
});