var app = angular.module("main", ["ngRoute", "Auth"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "js/components/landing-page/landing-page.html",
            controller: "LandingPageController"
        })
        .when("/blog", {
            templateUrl: "js/components/blog/blog.html",
            controller: "BlogController"
        })
        .when("/shop", {
            templateUrl: "js/components/shop/shop.html",
            controller: "ShopController"
        })
        .when("/pricing", {
            templateUrl: "js/components/pricing/pricing.html",
            controller: "PricingController"
        })
        .when("/about", {
            templateUrl: "js/components/about/about.html",
            controller: "AboutController"
        })
        .when("/profile", {
            templateUrl: "js/components/profile/profile.html",
            controller: "ProfileController"
        })
        .when("/calendar", {
            templateUrl: "js/components/calendar/calendar.html",
            controller: "CalendarController"
        })
        .otherwise({
            redirectTo: "/"
        })
}]);