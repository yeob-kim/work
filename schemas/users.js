const mongoose = require("mongoose");

const { Schema } = mongoose;
const usersSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Users", usersSchema);