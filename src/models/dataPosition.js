const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataPosition = new Schema({
    data: {type: Buffer},
},{
    timestamps: true,
}
);

module.exports = mongoose.model('dataPosition', dataPosition);