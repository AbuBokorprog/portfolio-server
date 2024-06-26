import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import User from "../users/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";

const loginUser = async (payload) => {
  const { email, password } = payload;

  const data = await User.findOne({ email: email });

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  const isMatch = await bcrypt.compare(password, data.password);

  if (!isMatch) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Password mismatched");
  }

  const userInfo = {
    name: data.name,
    email: data.email,
    role: data.role,
  };

  const Access_Token = jwt.sign(userInfo, config.accessToken, {
    expiresIn: config.expiresIn,
  });

  return {
    isMatch,
    Access_Token,
  };
};

export const authServices = { loginUser };
