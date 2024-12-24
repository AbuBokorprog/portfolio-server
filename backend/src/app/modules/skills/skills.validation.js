import Joi from 'joi';

export const createSkillValidationSchema = Joi.object({
  image: Joi.string().optional(),
  technology_name: Joi.string().required(),
});

export const updateSkillValidationSchema = Joi.object({
  image: Joi.string().optional(),
  technology_name: Joi.string().optional(),
});
