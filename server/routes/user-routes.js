var express = require("express");
var userRouter = express.Router();
var User = require("../models/user");

userRouter.route("/:userId")
    .get(function (req, res) {
        User.findOne({
            _id: req.params.userId,
        }, function (err, user) {
            if (err) return res.status(500).send(err);
            if (!user) return res.status(400).send("No user found.");
            else res.send(user);
        });
    })
    .put(function (req, res) {
        User.findOneAndUpdate({
            _id: req.params.userId,
        }, req.body, {
            new: true
        }, function (err, updatedUser) {
            if (err) return res.status(500).send(err);
            res.send(updatedUser);
        });
    })
    .delete(function (req, res) {
        User.findOneAndRemove({
            _id: req.params.userId,
        }, function (err, deletedUser) {
            if (err) return res.status(500).send(err);
            res.send(deletedUser);
        });
    });

module.exports = userRouter;