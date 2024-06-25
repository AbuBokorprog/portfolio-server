import httpStatus from "http-status";

const mongooseValidationError = (Error) => {
  const errorSources = Object.values(Error.errors).map((e) => {
    return {
      path: e.path,
      message: e.message,
    };
  });

  const message = "Mongoose validation error";
  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode: statusCode,
    message: message,
    errorSources: errorSources,
  };
};

export default mongooseValidationError;
