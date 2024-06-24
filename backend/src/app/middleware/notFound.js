import httpStatus from "http-status";

// eslint-disable-next-line no-unused-vars
export const notFound = (req, res, next) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found",
    error: "",
  });
};
