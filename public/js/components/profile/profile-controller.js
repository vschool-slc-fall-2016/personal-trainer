var app = angular.module("main");

app.controller("ProfileController", ["$scope", "$location", "ProfileService", "UserService", function ($scope, $location, ProfileService, UserService) {

    $scope.profileEdit = false;

    (function getProfile() {
        ProfileService.getProfile().then(function (profile) {
            $scope.user = profile;
        });
    })();

    $scope.saveProfile = function (user) {
        ProfileService.updateProfile(user)
            .then(function (profile) {
                $scope.user = profile;
                $scope.profileEdit = false;
            });
    };
    
    $scope.deleteProfile = function (user) {
        ProfileService.deleteProfile(user).then(function (profile) {
            $scope.user = profile;
            UserService.logout();
            $location.path("/");
        });
    };
}]);