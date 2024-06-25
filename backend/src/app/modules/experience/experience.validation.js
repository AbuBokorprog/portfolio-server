import Joi from "joi";

export const createExperienceValidationSchema = Joi.object({
  title: Joi.string().required(),
  short_description: Joi.string().required(),
  startTime: Joi.date().required(),
  isPresent: Joi.boolean().required(),
  endTime: Joi.date().optional(),
});

export const updateExperienceValidationSchema = Joi.object({
  title: Joi.string().optional(),
  short_description: Joi.string().optional(),
  startTime: Joi.date().optional(),
  isPresent: Joi.boolean().optional(),
  endTime: Joi.date().optional(),
});
