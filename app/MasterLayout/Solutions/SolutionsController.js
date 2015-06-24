/**
 * Created by simonjones on 5/15/15.
 */
var abcd = function(){
 	return{name:"maxwell"}
 	 };
 


(function(a) {
    "use strict";

    var SolutionController = function SolutionController ($log) {
        $log.debug("Hello"+ a().name);
    };

    angular.module('valCorp')
        .controller("SolutionController", SolutionController );

}(abcd));

