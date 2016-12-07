var app = angular.module("main", ["ngRoute", "Auth"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "js/components/landing-page/landing-page.html",
            controller: "LandingPageController"
        })
        .when("/login", {
            templateUrl: "js/components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/blog", {
            templateUrl: "js/components/blog/blog.html",
            controller: "BlogController"
        })
        .when("/profile", {
            templateUrl: "js/components/profile/profile.html",
            controller: "ProfileController"
        })
        .otherwise("/", {
            templateUrl: "js/components/landing-page/landing-page.html",
            controller: "LandingPageController"
        })
}]);