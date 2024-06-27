const validateRequest = (schema) => {
  return async (req, res, next) => {
    const response = JSON.parse(req.body.data);
    const data = await schema.validate(response);
    if (data.error) {
      next(data?.error);
    }
    next();
  };
};

export default validateRequest;
