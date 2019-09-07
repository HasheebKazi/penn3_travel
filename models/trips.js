const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    a: {
        type: String,
        required: true
    },
    b: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Trip', tripSchema);
