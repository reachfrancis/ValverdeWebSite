/**
 * Created by Francis on 5/15/2015.
 */
/*
(function () {
    // FDC, 10.01.2014  We need to inject this directive here because of a known bug, in bootstrap.
    // for now ignored this code.
    angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
        .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
        }]).directive('carousel', [function () {
            return {
                restrict: 'EA',
                transclude: true,
                replace: true,
                controller: 'CarouselController',
                require: 'carousel',
                templateUrl: 'template/carousel/carousel.html',
                scope: {
                    interval: '=',
                    noTransition: '=',
                    noPause: '='
                }
            };
        }]);


}
)(); */


(function() {
    "use strict";

    var HomePageController = function homeController($log) {

        $log.debug("Hello you are on the HomePage View");
       //var autoSlideShow = true; // Assume that the slideshow is live, the user can turn the slide show off by manipulating the slide via the old click.


        this.myInterval = 0;
        this.slides = [
            {
                image: '../Content/images/bg.jpg'
            },
            {
                image: '../Content/images/businessProcess.jpg'
            },
            {
                image: '../Content/images/iStock_000016097473XSmall_610_300_s_c1_center_center.jpg'
            },

            {
                image: '../Content/images/Free-Business-Checking-Featured-Product-Photo.jpg'
            },
            {
                image: '../Content/images/retrx_360.jpg'
            },
            {
                image: '../Content/images/images.jpg'
            }
        ];

    };

    angular.module('valCorp')
        .controller("HomePageController", HomePageController);

}());

