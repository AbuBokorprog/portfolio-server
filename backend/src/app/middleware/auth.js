import httpStatus from "http-status";
import AppError from "../errors/appError.js";
import { catchAsync } from "../utils/catchAsync.js";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
const Auth = (role) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    const decoded = jwt.verify(token, config.accessToken);

    if (decoded && !decoded.role === role) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are Unauthorized!");
    }

    req.user = decoded;

    next();
  });
};

export default Auth;
