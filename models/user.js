var mongoose = ("mongoose");
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
    height: Number, //in inches
    weight: Number,
    phoneNumber: Number,
    address: String
    
});

module.exports = mongoose.model("User", userSchema);