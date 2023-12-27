const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataPosition = new Schema({
    data: {type: String},
},{
    timestamps: true,
}
);

module.exports = mongoose.model('dataPosition', dataPosition);