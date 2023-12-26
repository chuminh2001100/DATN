const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const V2 = new Schema({
    image: {type: String, maxLength: 255},
    name: { type: String, maxLength: 255 },
    description: {type: String, maxLength: 600},
    slug: { type: String, slug: 'name', unique: true },
},{
    timestamps: true,
}
);

module.exports = mongoose.model('VDT', V2);