const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fithub");
const userSchema = new mongoose.Schema({
    email: {
        unique: true,
        lowercase: true,
        required: true,
        type: String,
    },
    username: {
        type: String,
        required: true,

    },
    password:{
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true,

    },
    gender: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },

})
userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("user", userSchema);
