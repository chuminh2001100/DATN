const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const moment = require('moment-timezone');
mongoose.plugin(slug);
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		min: 6,
		max: 30,
		unique: true
	},
	email: {
		type: String,
		required: true,
		max: 255,
		min: 6,
		unique: true
	},
	password: {
		type: String,
		required: true,
		max: 128,
		min: 6,
	},
	role: {
		type: String,
		enum: ['admin', 'customer'],
		default: 'customer',
	},
	phonenumber: {
		type: String,
		required: false,
		max: 15,
		min: 8,
		default: '',
	},
	address: {
		type: String,
		default: '',
		required: false,
	},
	dateOfBirth: {
		type: Date,
		required: false,
	},
	createdDate: {
		type: Date,
		default: moment().add(7, 'hours'),
	},
	modifiedDate: {
		type: Date,
		default: moment().add(7, 'hours'),
	},
},{
    timestamps: true
});

module.exports = mongoose.model('userData', userSchema);