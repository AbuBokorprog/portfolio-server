import Joi from "joi";

export const createUserValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  image: Joi.string().optional(),
  role: Joi.string().required(),
});

export const updateUserValidationSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().optional(),
  password: Joi.string().optional(),
  phone: Joi.string().optional(),
  image: Joi.string().optional(),
  role: Joi.string().optional(),
});
