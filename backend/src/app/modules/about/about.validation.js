import joi from "joi";

export const createAboutValidationSchema = joi.object({
  description: joi.string().required(),
});

export const updateAboutValidationSchema = joi.object({
  description: joi.string().optional(),
});
