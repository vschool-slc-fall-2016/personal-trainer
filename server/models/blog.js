var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.objectId;

var commentSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

var blogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: String,
    comments: {
        type: [commentSchema],
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("blog", blogPostSchema);