import httpStatus from "http-status";

const duplicateError = (Error) => {
  const errorSources = [
    {
      path: "",
      message: Error.errorResponse?.errmsg,
    },
  ];

  const message = "duplicate key error";
  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode: statusCode,
    message: message,
    errorSources: errorSources,
  };
};

export default duplicateError;
