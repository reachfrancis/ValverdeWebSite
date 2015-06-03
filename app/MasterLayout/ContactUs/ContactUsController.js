/**
 * Created by simonjones on 5/15/15.
 */
(function() {
    "use strict";

    var ContactController = function ContactController ($log) {
        $log.debug("Hello You are on the Contact View")
};

    angular.module('valCorp')
        .controller("ContactController",ContactController);

}());

(function() {
    "use strict";

    var TooltipCtrl = function TooltipCtrl($scope, $sce) {
          $scope.dynamicTooltipFull= [];
          $scope.dynamicTooltipFirst = [];
          $scope.dynamicTooltipLast = [];
          $scope.dynamicTooltipCity =[];
          $scope.dynamicTooltipState = [];
          $scope.dynamicTooltipZip = [];
          $scope.dynamicTooltipEmail = [];
          $scope.dynamicTooltipAge= [];
          $scope.dynamicTooltipGender = 'Sex: male,femlae, other';
          $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
};

    angular.module('valCorp')
        .controller('TooltipCtrl', TooltipCtrl);

}());
