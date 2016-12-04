var app = angular.module("main");

app.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "js/components/navbar/navbar.html",
        link: function(scope) {
            scope.UserService = UserService;
        }
    }
}]);