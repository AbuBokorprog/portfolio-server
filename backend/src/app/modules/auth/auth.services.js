import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import User from "../users/users.model.js";
import bcrypt from "bcrypt";
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

  return isMatch;
};

export const authServices = { loginUser };
