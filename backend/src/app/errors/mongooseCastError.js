import httpStatus from "http-status";

const mongooseCastError = (Error) => {
  const errorSources = [
    {
      path: Error.path,
      message: `Invalid value for path '${Error.path}': '${Error.value}'. Expected a valid ${Error.kind}.`,
    },
  ];

  const message = "Mongoose cast Erroror";
  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode: statusCode,
    message: message,
    errorSources: errorSources,
  };
};

export default mongooseCastError;
