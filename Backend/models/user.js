const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    }
})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;