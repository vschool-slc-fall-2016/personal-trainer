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
        .otherwise("/", {
            templateUrl: "js/components/landing-page/landing-page.html",
            controller: "LandingPageController"
        })
}]);