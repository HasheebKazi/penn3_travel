const mongoose = require('mongoose');

const activitiesSchema = new mongoose.Schema({
    a: {
        type: String,
        required: true
    },
    b: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Activitie', activitiesSchema);
