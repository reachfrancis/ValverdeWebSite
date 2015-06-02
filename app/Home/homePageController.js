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
                image: '../Content/images/bg.jpg'
            },
            {
                image: '../Content/images/bg.jpg'
            },

            {
                image: '../Content/images/bg.jpg'
            },
            {
                image: '../Content/images/bg.jpg'
            },
            {
                image: '../Content/images/bg.jpg'
            }
        ];

    };

    angular.module('valCorp')
        .controller("HomePageController", HomePageController);

}());

// angular.module('ui.bootstrap.demo').controller('DropdownCtrl', function ($scope, $log) {
//   $scope.items = [
//     'The first choice!',
//     'And another choice for you.',
//     'but wait! A third!'
//   ];

//   $scope.status = {
//     isopen: false
//   };

//   $scope.toggled = function(open) {
//     $log.log('Dropdown is now: ', open);
//   };

//   $scope.toggleDropdown = function($event) {
//     $event.preventDefault();
//     $event.stopPropagation();
//     $scope.status.isopen = !$scope.status.isopen;
//   };
// });

