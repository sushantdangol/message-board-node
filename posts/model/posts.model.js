const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: false,
        maxlength: 255
    },

    post: {
        type: String,
        required: true
    },

    postImage: {
        type: String,
        required: false
    },

    date: {
        type: String,
        required: false,
    },
},
{
    timestamps: true
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;