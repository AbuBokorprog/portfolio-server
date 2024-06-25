import httpStatus from "http-status";
import config from "../config/index.js";
import Joi from "joi";
import mongoose from "mongoose";
import AppError from "../errors/appError.js";
import joiValidationError from "../errors/joiValidationError.js";
import mongooseValidationError from "../errors/mongooseValidationError.js";
import mongooseCastError from "../errors/mongooseCastError.js";
import duplicateError from "../errors/duplicateError.js";

// eslint-disable-next-line no-unused-vars
export const globalError = (err, req, res, next) => {
  let message = err | "Something went wrong!";
  let statusCode = httpStatus.BAD_REQUEST | 500;

  let errorSources = [
    {
      path: "",
      message: "SomeThing went wrong!",
    },
  ];

  // ------------------------------ Others Error Handling ---------------------------------
  // joi error handling
  if (err instanceof Joi.ValidationError) {
    const simplifiedError = joiValidationError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

    // mongoose validation error
  } else if (err instanceof mongoose.Error.ValidationError) {
    const simplifiedError = mongooseValidationError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

    // mongoose cast error
  } else if (err instanceof mongoose.Error.CastError) {
    const simplifiedError = mongooseCastError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

    // duplicate error
  } else if (err.code === 11000) {
    const simplifiedError = duplicateError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;

    // app error
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];

    // Error
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message: message,
    errorSources: errorSources,
    stack: config.node_env === "development" ? err?.stack : null,
  });
};
