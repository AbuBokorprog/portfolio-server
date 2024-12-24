import Joi from 'joi';

export const createEducationValidationSchema = Joi.object({
  degree: Joi.string().required(),
  grade: Joi.string().required(),
  field: Joi.string().required(),
  institute_name: Joi.string().required(),
  institute_location: Joi.string().required(),
  short_description: Joi.optional(),
  startTime: Joi.date().required(),
  isPresent: Joi.boolean().optional(),
  endTime: Joi.optional(),
});

export const updateEducationValidationSchema = Joi.object({
  degree: Joi.string().optional(),
  grade: Joi.string().optional(),
  field: Joi.string().optional(),
  institute_name: Joi.string().optional(),
  institute_location: Joi.string().optional(),
  short_description: Joi.string().optional(),
  startTime: Joi.date().optional(),
  isPresent: Joi.boolean().optional(),
  endTime: Joi.date().optional(),
});
