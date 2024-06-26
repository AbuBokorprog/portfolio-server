import Joi from "joi";

export const createUserValidationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.number().required(),
  phone: Joi.string().required(),
});

export const updateUserValidationSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.number().optional(),
  phone: Joi.string().optional(),
});
