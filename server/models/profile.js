var mongoose = ("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var profileSchema = new Schema ({
    firstName: String,
    lastName: String,
    age: Number,
    height: Number, //in inches
    weight: Number,
    phoneNumber: Number,
    address: String,
    allergies: String
});

module.exports = mongoose.model("Profile", profileSchema);