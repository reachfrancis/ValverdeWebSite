
/* Authors..:Francis Contreras
             David Jones
*/

/// <reference path="/app/library/google/js/angular.js" />

"use strict";

//  Enclose the application  Use closure since its good Javascript practice.
(function () {

    var corpWebSite =  angular.module('valCorp', ['ngRoute']);




    corpWebSite.config(function ($routeProvider){
        $routeProvider.
            // Sets up the routing for our web application.
            when ("/app/Home/", {
                templateUrl: 'Home/HomePageView.html',
                caseInsensitiveMatch: true
            }).
           when ("/Products", {
            templateUrl: 'products/productsView.html',
            caseInsensitiveMatch: true
        }).
        when ("/Solutions", {
            templateUrl: 'app/',
            caseInsensitiveMatch: true
        }).
        when ("/ContactUs", {
            templateUrl: 'app/',
            caseInsensitiveMatch: true
        }).
        when ("/Register", {
            templateUrl: 'app/',
            caseInsensitiveMatch: true
        }).
        when ("/Opportunities", {
            templateUrl: 'app/',
            caseInsensitiveMatch: true
        }).
        otherwise( {
                    redirectTo: '/app/Home/'})
                })

}());