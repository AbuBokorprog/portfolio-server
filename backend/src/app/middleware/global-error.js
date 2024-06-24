import httpStatus from "http-status";

// eslint-disable-next-line no-unused-vars
export const globalError = (err, req, res, next) => {
  const message = err | "Something went wrong!";
  const statusCode = httpStatus.BAD_REQUEST | 500;

  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};
