/**
 * Created by simonjones on 5/15/15.
 */
(function() {
    "use strict";

    var SolutionController = function ProductController ($log) {
        $log.debug("Hello You are on the Solution View")
    };

    angular.module('valCorp')
        .controller("SolutionController", SolutionController );

}());
