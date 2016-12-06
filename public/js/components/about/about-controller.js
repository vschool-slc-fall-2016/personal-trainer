var app = angular.module("main");

app.controller("AboutController", ["$scope", "AboutService", function($scope, AboutService){
    $scope.submitMessage = function(contact){
        AboutService.submitMessage()
            //.then(function(){
                //flesh this out later, as well as build back-end email functionality
                alert("Thank you! Your message has been submitted.");
            //})
            $scope.contact = {};
    }
}])