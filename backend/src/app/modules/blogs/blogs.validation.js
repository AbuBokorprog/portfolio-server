import Joi from 'joi';

export const createBlogValidationSchema = Joi.object({
  title: Joi.string().required(),
  categoryId: Joi.string().required(),
  description: Joi.string().required(),
});

export const updateBlogValidationSchema = Joi.object({
  title: Joi.string().optional(),
  categoryId: Joi.string().optional(),
  description: Joi.string().optional(),
});
