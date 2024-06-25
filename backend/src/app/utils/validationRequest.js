const validateRequest = (schema) => {
  return async (req, res, next) => {
    const data = await schema.validate(req.body);
    if (data.error) {
      next(data?.error);
    }
    next();
  };
};

export default validateRequest;
