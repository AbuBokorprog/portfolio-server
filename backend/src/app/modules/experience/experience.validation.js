import Joi from "joi";

export const createExperienceValidationSchema = Joi.object({
  title: Joi.string().required(),
  startTime: Joi.date().required(),
  isPresent: Joi.boolean().required(),
  endTime: Joi.date().optional(),
  company_name: Joi.string().required(),
  company_location: Joi.string().required(),
  short_description: Joi.string().required(),
});

export const updateExperienceValidationSchema = Joi.object({
  title: Joi.string().optional(),
  startTime: Joi.date().optional(),
  isPresent: Joi.boolean().optional(),
  endTime: Joi.date().optional(),
  company_name: Joi.string().optional(),
  company_location: Joi.string().optional(),
  short_description: Joi.string().optional(),
});
