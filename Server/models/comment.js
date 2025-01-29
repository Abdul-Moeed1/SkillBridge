const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    commenterId: {
        type: String,
        required: true,
    },
    commenterName: {
        type: String,
        required: true,
    },
    commenterImg: {
        type: String,
        default: "https://via.placeholder.com/150",
    },
    profileId: {
        type: String,
        required: true,
    },
    posted: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;