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
          $scope.dynamicTooltipFull= 'Full Name';
          $scope.dynamicTooltipFirst = 'First Name';
          $scope.dynamicTooltipLast = 'Last Name';
          $scope.dynamicTooltipCity = 'City';
          $scope.dynamicTooltipState = 'State';
          $scope.dynamicTooltipZip = 'Zip';
          $scope.dynamicTooltipEmail = 'Ex: example@mail.com';
          $scope.dynamicTooltipAge= 'Age';
          $scope.dynamicTooltipGender = 'Sex: male,femlae, other';
          $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
};

    angular.module('valCorp')
        .controller('TooltipCtrl', TooltipCtrl);

}());

