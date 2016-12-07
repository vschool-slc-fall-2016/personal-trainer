var app = angular.module("main");

app.service("ProfileService", ["$http", function ($http) {

    //get one profile (user's own profile)
    this.getProfile = function () {
        return $http.get("/api/profiles/me").then(function (response) {
            return response.data;
        }, function (response) {
            console.log("Error " + response.status + ": " + response.statusText);
        });
    };

    //update profile
    this.updateProfile = function (user) {
        return $http.put("/api/profiles/me", user).then(function (response) {
            return response.data;
        }, function (response) {
            console.log("Error " + response.status + ": " + response.statusText);
        });
    };

    //delete profile
    this.deleteProfile = function (user) {
        return $http.delete("/api/profiles/me", user).then(function (response) {
            return response.data;
        }, function (response) {
            console.log("Error " + response.status + ": " + response.statusText);
        });
    };
}]);