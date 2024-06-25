import httpStatus from "http-status";
import config from "../config/index.js";
import Joi from "joi";
import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
export const globalError = (err, req, res, next) => {
  // console.log(err);
  let message = err | "Something went wrong!";
  let statusCode = httpStatus.BAD_REQUEST | 500;

  let errorSources = [
    {
      path: "",
      message: "SomeThing went wrong!",
    },
  ];

  if (err instanceof Joi.ValidationError) {
    errorSources = err.details.map((e) => {
      return {
        path: e.path,
        message: e.message,
      };
    });

    message = "Joi error";
    statusCode = httpStatus.BAD_REQUEST;
  } else if (err instanceof mongoose.Error.ValidationError) {
    errorSources = Object.values(err.errors).map((e) => {
      return {
        path: e.path,
        message: e.message,
      };
    });

    message = "Mongoose validation error";
    statusCode = httpStatus.BAD_REQUEST;
  } else if (err instanceof mongoose.Error.CastError) {
    console.log(err);
  }

  return res.status(statusCode).json({
    success: false,
    message: message,
    errorSources: errorSources,
    stack: config.node_env === "development" ? err?.stack : null,
  });
};
