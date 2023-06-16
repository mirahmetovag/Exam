const Joi = require("joi");

const requestValidation = (data) => {
    const schema = Joi.object({
        userName: Joi.string().min(6).required(),
        phoneNumber: Joi.number().min(9).max(12).required(),
        email: Joi.email().required(),
        message: Joi.string().alphanum().required()
    })

    const { error } = schema.validate(data);
    return error ? error.message : false;
}

module.exports = requestValidation;