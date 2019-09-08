const mongoose = require('mongoose');
const Trip = require('../models/trips');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    activities: [String],
    trips: [{
        tripId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trip'
        }
    }]
});

module.exports = mongoose.model('User', userSchema);
