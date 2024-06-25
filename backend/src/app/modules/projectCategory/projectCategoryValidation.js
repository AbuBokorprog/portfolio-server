import Joi from "joi";

export const createProjectCategoryValidationSchema = Joi.object({
  category_name: Joi.string().required(),
});
export const updateProjectCategoryValidationSchema = Joi.object({
  category_name: Joi.string().optional(),
});
