import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import User from "../users/users.model.js";

const loginUser = async (payload) => {
  const { email, password } = payload;

  const data = await User.findOne({ email: email });

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  return data;
};

export const authServices = { loginUser };
