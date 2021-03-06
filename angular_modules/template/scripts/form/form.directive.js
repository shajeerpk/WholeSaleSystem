(function () {
    'use strict';

    angular.module('dndApp')
        .directive('uiRangeSlider', uiRangeSlider)
        .directive('uiFileUpload', uiFileUpload)
        .directive('uiSpinner', uiSpinner)
        .directive('uiWizardForm', uiWizardForm);

    // Dependency: http://www.eyecon.ro/bootstrap-slider/ OR https://github.com/seiyria/bootstrap-slider
    function uiRangeSlider() {
        return {
            restrict: 'A',
            link: function(scope, ele) {
                ele.slider();
            }            
        }
    }
    
    // Dependency: https://github.com/grevory/bootstrap-file-input
    function uiFileUpload() {
        return {
            restrict: 'A',
            link: function(scope, ele) {
                ele.bootstrapFileInput();
            }            
        }
    }

    // Dependency: https://github.com/xixilive/jquery-spinner
    function uiSpinner() {
        return {
            restrict: 'A',
            compile: function(ele, attrs) { // link and compile do not work together
                ele.addClass('ui-spinner');
                return {
                    post: function() {
                        ele.spinner();
                    }
                };
            }
            // link: // link and compile do not work together
        }
    }


    // Dependency: https://github.com/rstaib/jquery-steps
    function uiWizardForm() {
        return {
            restrict: 'A',
            link: function(scope, ele) {
                ele.steps()
            }            
        }
    }

})(); 


