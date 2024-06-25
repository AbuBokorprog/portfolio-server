import Joi from "joi";

export const createBlogValidationSchema = Joi.object({
  thumbnail: Joi.string().required(),
  title: Joi.string().required(),
  articles: Joi.string().required(),
});

export const updateBlogValidationSchema = Joi.object({
  thumbnail: Joi.string().optional(),
  title: Joi.string().optional(),
  articles: Joi.string().optional(),
});
