const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    ownerEmail: {
        type: String,
        required: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    participantList: [{
        // id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true
        // },
        email: {
            type: String,
            require: true
        }
    }],
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
        required: true
    },
    commonActivities: [String]
});

module.exports = mongoose.model('Event', eventSchema);
