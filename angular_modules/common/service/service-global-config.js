angular.module('dndApp').service('serviceGlobalConfig',['$http','dndConfig',function($http,dndConfig) {

	this.fnSaveConfig =function(global_config){
		var promise = $http({
	      url: dndConfig.AWS+'dndApi/globalConfig/',
	      data: {user_id:global_config.user_id, layout_style:global_config.layout,menu_style:global_config.menu,fixed_side_header:global_config.fixedHeader,fixed_side_bar:global_config.fixedSidebar,page_transition_class:global_config.pageTransition.class,page_transition_name:global_config.pageTransition.name,skin:global_config.skin,language:global_config.lang},
	      method: "POST",
	      withCredentials: false,
	      contentType:"application/json",
	      dataType:"json",
	    });
	    return promise;
	}

	/*this.fnSaveLang =function(lang,user_id){
		  
		var promise = $http({
	      url: dndConfig.AWS+'dndApi/globalConfigsaveLanguage/',
	      data: {user_id:user_id,language:lang},
	      method: "POST",
	      withCredentials: false,
	      contentType:"application/json",
	      dataType:"json",
	    });
	    return promise;
	}*/

	this.fnLoadConfig =function(user_id){
		var promise = $http({
	      url: dndConfig.AWS+'dndApi/loadConfig/',
	      data: {user_id:user_id},
	      method: "POST",
	      withCredentials: false,
	      contentType:"application/json",
	      dataType:"json",
	    });
	    return promise;
	}    
}]);