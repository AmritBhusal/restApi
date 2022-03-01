const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    cryptoName: {
        required: true,
        type: String
    },
    qtyHoldings: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)