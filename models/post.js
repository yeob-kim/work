const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    order : {
        type : Number,
    }
});

PostSchema.virtual("postId").get(function () {
    return this._id.toHexString();
});

PostSchema.set("toJSON", {
    virtual : true,
});

module.exports = mongoose.model("Post", PostSchema );