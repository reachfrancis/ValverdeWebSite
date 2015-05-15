/**
 * Created by Francis on 5/15/2015.
 */

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
)();


(function() {
    "use strict";

    var HomePageController = function homeController($log) {
        $log.debug("Hello you are on the HomePage View")
       var autoSlideShow = true; // Assume that the slideshow is live, the user can turn the slide show off by manipulating the slide via the old click.


        this.homeInfo = {
            currentSlide: 0,
            slideInterval: 6800,  // default the slideShow interval to 6.5 sec. ==> 6500
            showSlide: undefined,
            slideRight: undefined,
            slideLeft: undefined,
            slidingDirection:undefined  //
        };

        var homeInfo = this.homeInfo;




        homeInfo.userSlideLeftClick = function () {
            autoSlideShow = false; // turn-off the automatic slide show, since the user clicked
            homeInfo.slideLeft();
        }


        homeInfo.userSlideRightClick = function () {
            autoSlideShow = false; // turn-off the automatic slide show, since the user clicked
            homeInfo.slideRight();
        }

        homeInfo.showOrHide = function (mySlideNo) {

            // The slideInCssClasses array holds a list of css classes that are applied to the
            // element that is being slid in.
            // While the slideOutCssClasses holds the classes that are applied to the element that will be slide out.
            var slideInClasses = ['active'], slideOutClasses = [];



            if (homeInfo.slidingDirection === "right") {
                slideInClasses.push('ng-slideInRight');
                slideOutClasses.push('ng-slideOutLeft');
            }
            else {
                slideInClasses.push('ng-slideInLeft');
                slideOutClasses.push('ng-slideOutRight');
            }


            if (mySlideNo === homeInfo.currentSlide) {
                return slideInClasses;
            }
            else {
                // Slide out, the element.
                return slideOutClasses;
            }
        };


        homeInfo.showSlide = function (slideNo) {
            autoSlideShow = false; // turn-off the auto slideShow since the user clicked on the button
            homeInfo.currentSlide = slideNo;
        }




        homeInfo.slideRight = function () {
            // Keep track of the sliding direction.
            homeInfo.slidingDirection = "right";



            if (homeInfo.currentSlide === 2) {
                homeInfo.currentSlide = 0;
            }
            else {
                homeInfo.currentSlide = homeInfo.currentSlide + 1;
            }
        }


        homeInfo.slideLeft = function () {
            // Track the sliding direction.
            homeInfo.slidingDirection = "left";


            if (homeInfo.currentSlide === 0) {
                homeInfo.currentSlide = 2;
            }
            else {
                homeInfo.currentSlide = homeInfo.currentSlide - 1;
            }
        }


        var updateSlide = function () {
            homeInfo.slideRight();
        };


        setInterval(function () {
            if (autoSlideShow) {
               // $apply(updateSlide);
            }

        }, homeInfo.slideInterval);

    }

    angular.module('valCorp')
        .controller("HomePageController", HomePageController);

}());

