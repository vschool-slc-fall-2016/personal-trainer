var app = angular.module("main");

app.service("AboutService", ["$http", function($http){
    this.submitMessage = function(contact){
        //$http.post("/email", contact);
    }
}])