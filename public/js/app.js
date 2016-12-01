var app = angular.module("main", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "js/components/landing-page/landing-page.html",
            controller: "LandingPageController"
        })
        .otherwise("/", {
            templateUrl: "js/components/landing-page/landing-page.html",
            controller: "LandingPageController"
        })
}])