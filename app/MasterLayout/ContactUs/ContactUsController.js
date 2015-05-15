/**
 * Created by simonjones on 5/15/15.
 */
(function() {
    "use strict";

    var ContactController = function ContactController ($log) {
        $log.debug("Hello You are on the Contact View")
    };

    angular.module('valCorp')
        .controller("ContactController", ContactController );

}());
