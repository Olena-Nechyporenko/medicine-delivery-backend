const Joi = require("joi");

const userDataSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({ "any.required": "Missing 'name' field" }),
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": "Missing 'email' field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "Missing 'phone' field" }),
  address: Joi.string()
    .required()
    .messages({ "any.required": "Missing 'address' field" }),
});

const drugSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  pharmacy: Joi.string().required(),
  quantity: Joi.string().required(),
});

const orderSchema = Joi.object({
  userData: userDataSchema,
  drugs: Joi.array().items(drugSchema).min(1).required(),
});

module.exports = {
  orderSchema,
};
