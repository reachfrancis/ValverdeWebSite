/**
 * Created by Francis on 4/19/2015.
 */
/// <reference path="/app/library/google/angular-1.3.15/angular.js" />

// TODO, move this menu into a separate JSON file and write a service which picks the menu from the
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
                    "Name": "SERVICES",
                    "Title": "Services",
                    "Description": "",
                    "SubMenuItems": [
                            {
                                "Name": "Industries/distributionSoftware",
                                "Title": "Distribution Software",
                                "Description": "",
                                "SubMenuItems": null
                            },
                            {
                                "Name": "Industries/RetailSoftware",
                                "Title": "Retail Software",
                                "Description": "",
                                "SubMenuItems": null
                            },
                            {
                                "Name": "industries/GamingSoftware",
                                "Title": "Gaming Software ",
                                "Description": "",
                                "SubMenuItems": null
                            }
                        ]
                    },
                    {

                        "Name": "Register",
                        "Title": "Register",
                        "Description": "",
                        "SubMenuItems": null
                    },
                    {
                        "Layout_Level": 2,
                        "Layout_Position": 8,
                        "ID": 44,
                        "SiteMenu_ID": 1,
                        "Name": "helpcenter",
                        "Title": "Help Center",
                        "Description": "",
                        "URL": "",
                        "Parent_SiteMenu_ID": 1,
                        "SubMenuItems": [
                            {
                                "Layout_Level": 0,
                                "Layout_Position": 0,
                                "ID": 45,
                                "SiteMenu_ID": 0,
                                "Name": "helpcenter/contactus",
                                "Title": "Contact Us",
                                "Description": "Contact Us",
                                "URL": "window.open('contact_us.html','menubar=no,toolbar=no,height=600,width=820');",
                                "Parent_SiteMenu_ID": 44,
                                "SubMenuItems": null
                            },

                            {
                                "Layout_Level": 0,
                                "Layout_Position": 0,
                                "ID": 47,
                                "SiteMenu_ID": 0,
                                "Name": "helpcenter/faq",
                                "Title": "FAQ",
                                "Description": "Frequently Asked Questions",
                                "URL": "window.open('FAQ.html','menubar=no,toolbar=no, scrollbars=yes,resizable=no,height=800,width=850');",
                                "Parent_SiteMenu_ID": 44,
                                "SubMenuItems": null
                            }
                        ]
                    }
                ]
    };

    angular.module('valCorp').constant("dataHeaderMnuConstant", dataHeaderMnuConstant());

}())

