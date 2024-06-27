import { sendImageToCloudinary } from "../../utils/sendingImageToCloudinary.js";
import User from "./users.model.js";

const createUser = async (file, payload) => {
  const imageName = payload.name;
  const path = file?.path;

  const response = await sendImageToCloudinary(imageName, path);

  const secureUrl = response.secure_url;
  payload.image = secureUrl;

  const data = await User.create(payload);
  return data;
};

export const userServices = { createUser };
