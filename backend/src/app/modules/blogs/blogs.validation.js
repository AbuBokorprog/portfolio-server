import Joi from 'joi';

export const createBlogValidationSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.array().required(),
  description: Joi.string().required(),
});

export const updateBlogValidationSchema = Joi.object({
  title: Joi.string().optional(),
  category: Joi.array().optional(),
  description: Joi.string().optional(),
});
