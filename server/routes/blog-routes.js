var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Blog = require("../models/blog");

router.route("/")
    .get(function(req, res){
        Blog.find(function(err, posts){
            if (err) return res.status(500).send(err);
            
            return res.send(posts);
        })
    })

    .post(function(req, res){
        var blog = new Blog(req.body);
    
        blog.save(function(err, post){
            if (err) return res.status(500).send(err);
            
            return res.send(post);
        })
    })

router.route("/:postId/comments/")
    .post(function(req, res){
        Blog.findById(req.params.postId, function(err, post){
            if (err) return res.status(500).send(err);
            
            post.comments.push(req.body);
            
            post.save(function(err){
                if (err) return res.status(500).send(err);
                
                return res.send(post);
            })
        })
    })

router.route("/:postId/comments/:commentId")
    .put(function(req, res){
        Blog.findById(req.params.postId, function(err, post){
            if (err) return res.status(500).send(err);
            
            post.comments.id(req.params.commentId).set(req.body);
            
            post.save(function(err){
                if (err) return res.status(500).send(err);
                
                return res.send(post);
            })
        })
    })

    .delete(function(req, res){
        Blog.findById(req.params.postId, function(err, post){
            if (err) return res.status(500).send(err);
            
            post.comments.id(req.params.commentId).remove();
            
            post.save(function(err){
                if (err) return res.status(500).send(err);
                
                return res.send(post);
            })
        })
    })

module.exports = router;