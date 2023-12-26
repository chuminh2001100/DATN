const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const wife = new Schema({
    image: {type: String, maxLength: 1000},
    name: { type: String, maxLength: 255 },
    description: {type: String, maxLength: 600},
    slug: { type: String, slug: 'name', unique: true },
},{
    timestamps: true,
}
);

module.exports = mongoose.model('wife', wife);