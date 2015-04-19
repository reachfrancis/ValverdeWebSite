
/* Authors..:Francis Contreras
             David Jones
*/



/// <reference path="/app/library/google/js/angular.js" />

"use strict";

//  Enclose the application  Use closure since its good Javascript practice.
(function () {

    'use strict';

    var  valverdeCorpApp  = angular.module('valverde_Corp',
        [ 'ngRoute',
            'ngAnimate',
            'ui.bootstrap',
            'ui.bootstrap.tooltip',
            'HomePageModController'
        ]);





    // Enable / disable $log.debug output.
    valverdeCorpApp.config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });




    // Routing ==============================================================================================
    // setup our routing for this application
    // Remember the Information  Guides are handled via the common/winPopUpService.js  service.
    // ======================================================================================================

    valverdeCorpApp.config(function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'app/Home/_HomePagePartialView.html',
                controller: 'HomePageController',
                caseInsensitiveMatch:true
            }).

            when('/services', {

            }).

            when('/test', {}).

            when ('/contact-us',{

              }).

            when ('/register', {}).

            when('about-us', {}).

            when('blog', {}).

            otherwise({
                redirectTo: '/home'
            });
    });



})();

