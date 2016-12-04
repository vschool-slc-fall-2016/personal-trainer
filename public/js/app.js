var app = angular.module("main", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "js/components/landing-page/landing-page.html",
            controller: "LandingPageController"
        })
        .when("/signup", {
            templateUrl: "js/components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "js/components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            template: "",
            controller: "LogoutController"
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