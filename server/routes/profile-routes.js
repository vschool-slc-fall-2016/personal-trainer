var express = require("express");
var ProfileRouter = express.Router();
var Profile = require("../models/user");

ProfileRouter.route("/me")
    .get(function (req, res) {
        Profile.findOne({
            _id: req.user._id
        }, function (err, profile) {
            if (err) return res.status(500).send(err);
            if (!profile) return res.status(400).send("No profile found.");
            else res.send(profile);
        });
    })
    .put(function (req, res) {
        Profile.findOneAndUpdate({
            _id: req.user._id
        }, req.body, {
            new: true
        }, function (err, updatedProfile) {
            if (err) return res.status(500).send(err);
            res.send(updatedProfile);
        });
    })
    .delete(function (req, res) {
    console.log(req.user);
        Profile.findOneAndRemove({_id: req.user._id}, function (err, deletedProfile) {
            if (err) return res.status(500).send(err);
            res.send(deletedProfile);
        });
    });

module.exports = ProfileRouter;