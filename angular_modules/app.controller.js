(function () {
    'use strict';

    angular.module('dndApp')
        .controller('AppCtrl', [ '$scope', '$rootScope', '$state', '$document','serviceGlobalConfig','$translate', AppCtrl]) // overall control
        .config(['$mdThemingProvider', mdConfig])
        .config(['$translateProvider', i18nConfig])   
    function AppCtrl($scope, $rootScope, $state, $document,serviceGlobalConfig,$translate) {

        var date = new Date();
        //var year = date.getFullYear();

        $scope.main = {
            brand: 'DND',
            name: 'DND'
           // year: year
        };

        $scope.pageTransitionOpts = [//transition options
            {
                name: 'Fade up',
                "class": 'animate-fade-up'
            }, {
                name: 'Scale up',
                "class": 'ainmate-scale-up'
            }, {
                name: 'Slide in from right',
                "class": 'ainmate-slide-in-right'
            }, {
                name: 'Flip Y',
                "class": 'animate-flip-y'
            }
        ];
         $scope.admin ={};
         $scope.pageTransition={};
      var gl_promise=serviceGlobalConfig.fnLoadConfig(36); //calling service function for checking whether the user has set any global configurations already
             gl_promise.then(function(response){                                  
                  var result=response.data.result;
                 
               if (typeof result == 'string') { //if the type of result is string it means the user has not set any global settings 
                  $scope.admin = {
                  layout: 'wide',                                 // 'boxed', 'wide'
                  menu: 'vertical',                               // 'horizontal', 'vertical', 'collapsed'
                  fixedHeader: true,                              // true, false
                  fixedSidebar: true,                             // true, false
                  pageTransition: $scope.pageTransitionOpts[0],   // unlimited
                  skin: '12',
                  lang:'English'                                   // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
                 };
               }else{ //if the type is obeject then the user has already set the global settings. so we set the user specific settings
                 
                 $scope.admin.layout =result[0].Tgs_layout_style;
                 $scope.admin.menu =result[0].Tgs_menu_style;
                 $scope.admin.fixedHeader=result[0].Tgs_fixed_side_header;
                 $scope.admin.fixedSidebar=result[0].Tgs_fixed_side_bar;
                 $scope.admin.skin =result[0].Tgs_skin.toString();
                 $scope.admin.lang =result[0].Tgs_language;
                 for (var i =0;i<$scope.pageTransitionOpts.length;i++){//to set the selected transitions
                    if(angular.equals($scope.pageTransitionOpts[i].name,result[0].Tgs_page_transition_name.toString())){
                       $scope.admin.pageTransition = $scope.pageTransitionOpts[i];
                      
                    }
                 }
                
                 $scope.setLang ($scope.admin.lang);
                
               }
             });

       

        
        $scope.$watch('admin', function(newVal, oldVal) { //create a watch for listening to changes in global settings
             
        if(newVal!= oldVal){ //it means there is no changes
             
               newVal.user_id =36    
            if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
                $rootScope.$broadcast('nav:reset');
            }
            if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
                if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
                    $scope.admin.fixedHeader = true;
                    $scope.admin.fixedSidebar = true;
                }
                if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
                    $scope.admin.fixedHeader = false;
                    $scope.admin.fixedSidebar = false;
                }
            }
            if (newVal.fixedSidebar === true) {
                $scope.admin.fixedHeader = true;
            }
            if (newVal.fixedHeader === false) {
                $scope.admin.fixedSidebar = false;
            }
            
          if(newVal.menu !=oldVal.menu || newVal.fixedHeader != oldVal.fixedHeader || newVal.fixedSidebar !=oldVal.fixedSidebar || newVal.layout !=oldVal.layout || newVal.menu != oldVal.menu || newVal.skin != oldVal.skin || newVal.pageTransition.class != oldVal.pageTransition.class || newVal.pageTransition.name != oldVal.pageTransition.name || newVal.lang != oldVal.lang){//we only need to call the service if there is any changes in the previous settings
                    var gl_promise=serviceGlobalConfig.fnSaveConfig(newVal);
                        gl_promise.then(function(response){                                  
                            var result=response.data.result;
                            
                        });
                    }         
        
       }             
        }, true);
 
            

       /* $scope.color = {
            primary:    '#3F51B5',
            success:    '#4CAF50',
            info:       '#00BCD4',
            infoAlt:    '#673AB7',
            warning:    '#FFC107',
            danger:     '#F44336',
            gray:       '#DCDCDC'
        };*/

        $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
            $document.scrollTo(0, 0);
        });

     //-----------------
       //$scope.lang = 'English';

            $scope.setLang = function(lang) {

                switch (lang) {
                    case 'English':
                        $translate.use('en');
                        break;
                    case 'arabic':
                         $translate.use('ar');
                         break;      
                }
                /* var gl_promise=serviceGlobalConfig.fnSaveLang(lang,36);
                    gl_promise.then(function(response){                                  
                       var result=response.data.result;
                        console.log(result);  
                   });*/
                return $scope.admin.lang = lang;
            };

           /* $scope.getFlag = function() {
                var lang;
                lang = $scope.admin.lang;
                switch (lang) {
                    case 'English':
                        return 'flags-american';
                        break;
                    case 'Español':
                        return 'flags-spain';
                        break;
                    case '中文':
                        return 'flags-china';
                        break;
                    case 'Portugal':
                        return 'flags-portugal';
                        break;
                    case '日本語':
                        return 'flags-japan';
                        break;
                    case 'Русский язык':
                        return 'flags-russia';
                        break;
                      case 'arabic':
                        return 'flags-american';
                        break;    
                }
            };*/

     //-----------------

    }

    function mdConfig($mdThemingProvider) { //to set the material design themes
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo', {
                'default': '500'
            })
            .accentPalette('cyan', {
                'default': '500'
            })
            .warnPalette('red', {
                'default': '500'
            })
            .backgroundPalette('grey');
    }

       function i18nConfig($translateProvider) {

            $translateProvider.useStaticFilesLoader({
                prefix: 'angular_modules/template/i18n/',
                suffix: '.json'
            });

          //  $translateProvider.preferredLanguage('en');
        }


})(); 