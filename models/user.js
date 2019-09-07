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
            // productId: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: 'Product',
            //     required: true
            // },
            // quantity: {
            //     type: Number,
            //     required: true
            // }
        }]
    }
});
// module.exports = User;