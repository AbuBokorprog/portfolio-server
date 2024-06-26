import User from "./users.model.js";

const createUser = async (payload) => {
  const data = await User.create(payload);
  return data;
};

export const userServices = { createUser };
