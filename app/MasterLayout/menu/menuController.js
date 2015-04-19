/**
 * Created by Francis on 4/18/2015.
 */

// Creates the necessary menu items for the website.
(function() {
    "use strict";

    var MenuController = function menuController(dataHeaderMnuConstant) {

        this.mnuItems = ["David", "Francis"];
    }

        angular.module('valCorp').controller("MenuController", MenuController);

}());

