var app = angular.module("main");

app.service("BlogService", ["$http", function($http){
    var url = "/blog/"
    
    this.getPosts = function(){
        return $http.get(url);
    }
    
    this.addComment = function(post, comment){
        var url = url + "/" + post._id + "/comments/";
        return $http.post(url, comment);
    }
    
    this.putComment = function(post, comment){
        var url = url + "/" + post._id + "/comments/" + comment._id;
        return $http.put(url, comment);
    }
    
    this.deleteComment = function(post, comment){
        var url = url + "/" + post._id + "/comments/" + comment._id;
        return $http.delete(url);
    }
}])