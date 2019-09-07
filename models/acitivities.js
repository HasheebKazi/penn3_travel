const mongoose = require('mongoose');

const activitiesSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    starting_time: {
        type: String,
        require: true
    },
    ending_time: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    key_words: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Activitie', activitiesSchema);
