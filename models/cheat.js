const mongoose = require('mongoose');

const cheatSchema = new mongoose.Schema({
    gameTitle: {
        type: String,
        required: true,
    },
    titleId: {
        type: String,
        required: true,
    },
    cheatDescription: {
        type: String,
        required: true,
    },
    cheatCode: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Cheat', cheatSchema);
