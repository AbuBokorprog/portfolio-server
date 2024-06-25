import Joi from "joi";

export const createSkillValidationSchema = Joi.object({
  icon: Joi.string().required(),
  technology_name: Joi.string().required(),
});

export const updateSkillValidationSchema = Joi.object({
  icon: Joi.string().optional(),
  technology_name: Joi.string().optional(),
});
