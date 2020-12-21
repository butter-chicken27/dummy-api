const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        default: -100
    }
});

module.exports = mongoose.model('Posts', postSchema);