angular.module('dndApp').service('serviceLogin',['$http','dndConfig',function($http,dndConfig) {

	this.fnLogin =function(user){
		
		console.log(user.name);
        console.log(user.password);
		var promise = $http({
	      url: dndConfig.AWS+'dndApi/login/',
	      data: {userName:user.name, password:user.password},
	      method: "POST",
	      withCredentials: false,
	      contentType:"application/json",
	      dataType:"json",
	    });
	    return promise;
	}
}]);