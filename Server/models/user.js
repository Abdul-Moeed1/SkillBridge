const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default :"https://via.placeholder.com/150",
    },
    role: {
        type: String,
        enum: ["learner", "mentor"], // Determines if the user is a learner or a mentor
        default: "learner",
    },
    skills: {
        type: [String],
    },
    joined: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;