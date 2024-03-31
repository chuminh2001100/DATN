const { Joi } = require('express-validation');
const loginValidation = {
	body: Joi.object({
		username: Joi.string().required(),
    	password: Joi.string().required()
	})
};

const registryUserValidation = {
	body: Joi.object({
		username: Joi.string().required(),
    	password: Joi.string().required(),
		againPassword: Joi.string().valid(Joi.ref('password')).required().label('Confirm password').messages({
            'any.only': '{{#label}} does not match password',
        }),
		email: Joi.string().email().required(),
	    numberphone: Joi.string().required().min(8).max(15),
		address: Joi.string().required()
	})
};

module.exports = { 
	loginValidation,
	registryUserValidation
};