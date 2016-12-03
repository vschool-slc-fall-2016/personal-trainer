var app = angular.module("main");

app.controller("BlogController", ["$scope", "BlogService", function($scope, BlogService){    
    $scope.posts = [];
    
    BlogService.getPosts()
        .then(function(response){
            $scope.posts = response.data;
        })
    
    $scope.addComment = function(post, index, comment){
        BlogService.postComment(post, comment)
            .then(function(response){
                $scope.posts[index] = response.data;
            })
    }
    
    $scope.editComment = function(post, index, comment){
        BlogService.putComment(post, comment)
            .then(function(response){
                $scope.posts[index] = response.data;
            })
    }
    
    $scope.deleteComment = function(post, index, comment){
        BlogService.deleteComment(post, comment)
            .then(function(response){
                $scope.posts[index] = response.data;
            })
    }
}])