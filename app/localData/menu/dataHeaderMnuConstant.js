
/// <reference path="/app/library/google/angular-1.3.15/angular.js" />

// TODO, move this Menu into a separate JSON file and write a service which picks the Menu from the
// the file using the $http service.

(function () {
    "use strict";

    var dataHeaderMnuConstant = function () {

        return[{  "Name": "Home",
                   "Title": "Home",
                    "Description": "Our Home Menu",
                    "SubMenuItems": null
                },
                {
                    "Name": "Products",
                    "Title": "Products",
                    "Description": "",
                    "SubMenuItems": [
                            {
                                "Name": "Industries/distribution Software",
                                "Title": "Distribution Software",
                                "Description": "",
                                "SubMenuItems": null
                            },
                            {
                                "Name": "Industries/Retail Software",
                                "Title": "Retail Software",
                                "Description": "",
                                "SubMenuItems": null
                            },
                            {
                                "Name": "industries/Gaming Software",
                                "Title": "Gaming Software ",
                                "Description": "",
                                "SubMenuItems": null
                            }
                        ]
                    },
                    {
                        "Name": "Solutions",
                        "Title": "Solutions",
                        "Description": "",
                        "SubMenuItems": null
                    },
                     {
                         "Name": "ContactUs",
                         "Title": "ContactUs",
                         "Description": "",
                         "SubMenuItems": null
                     },
                    {
                    "Name": "Register",
                "Title": "Register",
                "Description": "",
                "SubMenuItems": null
            },
            {
                "Name": "Opportunities",
                "Title": "Opportunities",
                "Description": "",
                "SubMenuItems": null
            }
        ]
    };

    angular.module('valCorp')
    .constant("dataHeaderMnuConstant", dataHeaderMnuConstant());

}());

