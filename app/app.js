
/* Authors..:Francis Contreras
             David Jones
*/

/// <reference path="/app/library/google/js/angular.js" />

"use strict";

//  Enclose the application  Use closure since its good Javascript practice.
(function () {

    var corpWebSite =  angular.module('valCorp', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.carousel']);


    corpWebSite.config(function ($routeProvider){
        $routeProvider.
            // Sets up the routing for our web application.
            when ("/app/Home/", {
                templateUrl: 'Home/HomePageView.html',
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