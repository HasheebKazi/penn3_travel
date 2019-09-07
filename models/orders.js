const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    a: {
        type: String,
        required: true
    },
    b: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Order', orderSchema);
