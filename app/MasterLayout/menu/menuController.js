// Creates the necessary menu items for the website.

(function() {
    "use strict";

    var MenuController = function menuController(dataHeaderMnuConstant, $log) {

        $log.debug("Hello");
        $log.debug(dataHeaderMnuConstant);
        this.menuItems = dataHeaderMnuConstant;


    };

    angular.module('valCorp')
        .controller("MenuController", MenuController)

}());




