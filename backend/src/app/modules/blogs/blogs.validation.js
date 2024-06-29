import Joi from "joi";

export const createBlogValidationSchema = Joi.object({
  title: Joi.string().required(),
  articles: Joi.string().required(),
});

export const updateBlogValidationSchema = Joi.object({
  title: Joi.string().optional(),
  articles: Joi.string().optional(),
});
