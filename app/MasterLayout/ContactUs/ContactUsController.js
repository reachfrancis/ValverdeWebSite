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

(function(){
  "use strict";

  var generalFooter = function generalFooter($scope, $sce){
    $scope.FooterGenerator = $sce.trustAsHtml('<div  class="generalFooter" >' +
         '<div class="footerStyle" >' +
         '<div class="footerStyle" >' +
         '<input type="text" name="FooterGenerator" value="">' +
         '<blockquote>' +
         ' <a href="">Terms and Conditions of Use & Disclaimer.</a>' +
         ' <p>This website and its content is copyright of Valverde IT. LLC - © Valverde IT. LLC 2015. All rights reserved. </p>'+
         '</blockquote>'+
         '</div>'+
         '</div>');
         
  };

  angular.module('valCorp')
        .controller('generalFooter', generalFooter);

}());