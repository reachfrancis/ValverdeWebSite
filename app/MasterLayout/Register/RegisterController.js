/**
 * Created by simonjones on 5/15/15.
 */
(function() {
    "use strict";

    var RegisterController = function RegisterController ($log) {
        $log.debug("Hello You are on the Register View")
    };
    
    angular.module('valCorp')
        .controller("RegisterController",RegisterController); 

}());

