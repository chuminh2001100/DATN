const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const V2 = new Schema({
    name: { type: String, maxLength: 255 },
    description: {type: String, maxLength: 600},
    CreateAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VDT', V2);