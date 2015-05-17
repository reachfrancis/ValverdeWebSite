/**
 * Created by simonjones on 5/15/15.
 */
(function() {
    "use strict";

    var ContactController = function ContactController ($log) {
        $log.debug("Hello You are on the Contact View")
    };
    var TooltipDemoCtrl = function TooltipDemoCtrl($scope, $sce) {
          $scope.dynamicTooltip = 'Ex: example@mail.com';
          $scope.dynamicTooltipText = 'Full Name';
          $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
};

    angular.module('valCorp')
        .controller("ContactController",ContactController)
        .controller('TooltipDemoCtrl', TooltipDemoCtrl)

}());

