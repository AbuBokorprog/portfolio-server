import Joi from "joi";

export const createSkillValidationSchema = Joi.object({
  technology_name: Joi.string().required(),
});

export const updateSkillValidationSchema = Joi.object({
  technology_name: Joi.string().optional(),
});
