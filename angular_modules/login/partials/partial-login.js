angular.module('dndApp').controller('PartialLoginCtrl',['$scope','serviceLogin','$state',function($scope,serviceLogin,$state){
	 var original;

        $scope.user = {
            name: '',
            password: ''
        };
    original = angular.copy($scope.user);

   $scope.canSubmit = function() {//fn for checking whether the form can submit
            return $scope.form_signin.$valid && !angular.equals($scope.user, original);
        };
   $scope.submitForm = function() {//fn for login
          var loginPromise=serviceLogin.fnLogin($scope.user);
          loginPromise.then(function(response){  					//login response here
				var result=response.data.result;
				console.log(result);
				$state.go('home.main');
		  });		
    };
}]);