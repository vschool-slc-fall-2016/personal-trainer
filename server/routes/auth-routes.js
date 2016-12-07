var express = require("express");
var authRouter = express.Router();
var User = require("../models/user");
//var Profile = require("../models/profile");
var jwt = require("jsonwebtoken");
var config = require("../../server/config");

authRouter.post("/signup", function (req, res) {
    console.log(req.body);
    User.find({username: req.body.username}, function (err, existingUsers) {
        if (err) return res.status(500).send(err);
            console.log(existingUsers);
        if (existingUsers.length !== 0) {
            return res.status(400).send({success: false, message: "That username is already taken"});
        }
        var user = new User(req.body);
        user.save(function (err, newUser) {
            if (err) return res.status(500).send(err);
            return res.send({success: true, message: "Signed up a new user", user: newUser});
        });
    });
});

authRouter.post("/login", function (req, res) {
    User.findOne({username: req.body.username, password: req.body.password}, function (err, user) {
        console.log(user);
        if (err) return res.status(500).send(err);
        if (user === null) {
            return res.status(403).send({success: false, message: "Username or password provided does not match."});
        }
        var token = jwt.sign(user.toObject(), config.secret);
        res.send({token: token, user: user.toObject(), success: true, message: "Token aquired."});
    });
});

module.exports = authRouter;