import Joi from 'joi';

export const createProjectValidation = Joi.object({
  categoryId: Joi.string().required(),
  projects_name: Joi.string().required(),
  short_description: Joi.string().required(),
  skills: Joi.array().required(),
  github_url: Joi.string().required(),
  view_url: Joi.string().required(),
});

export const updateProjectValidation = Joi.object({
  categoryId: Joi.string().optional(),
  projects_name: Joi.string().optional(),
  short_description: Joi.string().optional(),
  skills: Joi.array().optional(),
  github_url: Joi.string().optional(),
  view_url: Joi.string().optional(),
});
