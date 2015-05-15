/**
 * Created by Francis on 5/15/2015.
 */
(function() {
    "use strict";

    var HomePageController = function homeController($log) {
        $log.debug("Hello you are on the HomePage View")
    }

    angular.module('valCorp')
        .controller("HomePageController", HomePageController);

}());

