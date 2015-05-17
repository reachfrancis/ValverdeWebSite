/**
 * Created by simonjones on 5/15/15.
 */
(function() {
    "use strict";

    var RegisterController = function RegisterController ($log) {
        $log.debug("Hello You are on the Register View")
    };
    var TooltipDemoCtrl = function TooltipDemoCtrl($scope, $sce) {
          $scope.dynamicTooltip = 'Ex: example@mail.com';
          $scope.dynamicTooltipText = 'Full Name';
          $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
    };

    angular.module('valCorp')
        .controller("RegisterController", RegisterController );
        .controller('TooltipDemoCtrl', TooltipDemoCtrl)

}());
