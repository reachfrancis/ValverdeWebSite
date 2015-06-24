
/* Authors..:Francis Contreras
             David Jones
*/

/// <reference path="/app/library/google/js/angular.js" />

"use strict";

//  Enclose the application  Use closure since its good Javascript practice.
(function () {

    var corpWebSite =  angular.module('valCorp', ['ngRoute','ngSanitize', 'ui.bootstrap', 'ui.bootstrap.carousel']);


    corpWebSite.config(function ($routeProvider){
        $routeProvider.
            // Sets up the routing for our web application.
            when ("/app/Home/", {
                templateUrl: 'MasterLayout/Home/HomePageView.html',
                caseInsensitiveMatch: true
            }).
           when ("/Products", {
            templateUrl: 'MasterLayout/Products/productsView.html',
            caseInsensitiveMatch: true
        }).
        when ("/Solutions", {
            templateUrl: 'MasterLayout/Solutions/solutionView.html',
            caseInsensitiveMatch: true
        }).
        when ("/ContactUs", {
            templateUrl: 'MasterLayout/ContactUs/ContactUsView.html',
            caseInsensitiveMatch: true
        }).
        when ("/Register", {
            templateUrl: 'MasterLayout/Register/RegisterView.html',
            caseInsensitiveMatch: true
        }).
        when ("/Opportunities", {
            templateUrl: 'MasterLayout/Opportunities/OpportunitiesView.html',
            caseInsensitiveMatch: true
        }).
        otherwise( {
                    redirectTo: '/app/Home/'})
                })

}());


(function() {
     "use strict";

     var generateFooter = function generateFooter($scope){

            
           $scope.footerHtml =
            '<div  class="generalFooter" >'+
            '<div class="footerStyle" >'+
            '<blockquote>'+
            '<a href="">Terms and Conditions of Use & Disclaimer.</a>'+
            '<p>This website and its content is copyright of Valverde IT. LLC -© Valverde IT. LLC 2015. All rights reserved. </p>'+
            '</blockquote>'+
            '</div>'+
            '</div>' ;
            
            
     };


 angular.module('valCorp')
     .controller("generateFooter", generateFooter)
 
 }());
