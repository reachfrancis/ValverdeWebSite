/**
 * Created by simonjones on 5/15/15.
 */
(function() {
    "use strict";

    var OpportunitiesController = function OpportunitiesController ($log) {
        $log.debug("Hello You are on the OpportunitiesView")
    };

    angular.module('valCorp')
        .controller("OpportunitiesController", OpportunitiesController );

}());
