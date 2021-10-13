const mongoose = require('mongoose');
const { Schema } = mongoose;
const autoIncrement = require('mongoose-auto-increment');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});


autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'user');
const User = mongoose.model('user', UserSchema);
module.exports = User;