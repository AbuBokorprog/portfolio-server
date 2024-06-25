import joi from "joi";

export const createAboutValidationSchema = joi.object({
  image: joi.string(),
  description: joi.string().required(),
});

export const updateAboutValidationSchema = joi.object({
  image: joi.string(),
  description: joi.string().required(),
});
