
(function() {
    "use strict";

    var ProductController = function ProductController ($log) {
        $log.debug("Hello You are on the Product View")
    };

    angular.module('valCorp')
        .controller("ProductController", ProductController );

}());

