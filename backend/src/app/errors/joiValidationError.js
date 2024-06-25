import httpStatus from "http-status";

const joiValidationError = (Error) => {
  const errorSources = Error.details.map((e) => {
    return {
      path: e.path,
      message: e.message,
    };
  });

  const message = "Joi error";
  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode: statusCode,
    message: message,
    errorSources: errorSources,
  };
};

export default joiValidationError;
