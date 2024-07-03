import Joi from "joi";

export const createEducationValidationSchema = Joi.object({
  degree: Joi.string().required(),
  institute_name: Joi.string().required(),
  institute_location: Joi.string().required(),
  short_description: Joi.string().required(),
  startTime: Joi.date().required(),
  isPresent: Joi.boolean().optional(),
  endTime: Joi.date().optional(),
});

export const updateEducationValidationSchema = Joi.object({
  degree: Joi.string().optional(),
  institute_name: Joi.string().optional(),
  institute_location: Joi.string().optional(),
  short_description: Joi.string().optional(),
  startTime: Joi.date().optional(),
  isPresent: Joi.boolean().optional(),
  endTime: Joi.date().optional(),
});
