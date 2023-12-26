const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wife = new Schema({
    image: {type: String, maxLength: 1000},
    name: { type: String, maxLength: 255 },
    description: {type: String, maxLength: 600},
},{
    timestamps: true,
}
);

module.exports = mongoose.model('wife', wife);