import joi from "joi";

const aboutValidationSchema = joi.object({
  image: joi.string(),
  description: joi.string().required(),
});

export default aboutValidationSchema;
