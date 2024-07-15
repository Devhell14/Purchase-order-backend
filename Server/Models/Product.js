const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true, 
        match: /.+\@.+\..+/ 
    },
    date: {
        type: Date,
        default: Date.now 
    },
    product: {
        type: Array,
        required: true, 
    }
}, { timestamps: true });

module.exports = mongoose.model('products', productSchema);
