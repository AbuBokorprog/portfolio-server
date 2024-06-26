import User from "../users/users.model.js";

const loginUser = async () => {
  const data = await User.findOne();
  return data;
};

export const authServices = { loginUser };
