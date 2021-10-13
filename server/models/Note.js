const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIncrement = require('mongoose-auto-increment');

const NotesSchema = new Schema({
    user: {
        type: String,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
});


autoIncrement.initialize(mongoose.connection);
NotesSchema.plugin(autoIncrement.plugin, 'notes');
module.exports = mongoose.model('notes', NotesSchema);