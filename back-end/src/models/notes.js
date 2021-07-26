const mongoose = require('../database');

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    createdAd: {
        type: Date,
        default: Date.now,
    },
});

const Notes = mongoose.model('Notes', NotesSchema);

module.exports = Notes;