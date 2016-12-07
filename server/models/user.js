var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    age: Number,
    gender: String,
    height: Number, //in inches
    weight: Number,
    phoneNumber: Number,
    address: String,
    foodAllergies: String
});

module.exports = mongoose.model("User", userSchema);