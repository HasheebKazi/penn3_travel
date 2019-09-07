const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    items: {
        vacations_info: [{

        }]
    }
});

module.exports = mongoose.model('User', userSchema);
