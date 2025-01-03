import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import { About } from "./about.model.js";
import { sendImageToCloudinary } from "../../utils/sendingImageToCloudinary.js";

const createAbout = async (file, payload) => {
  const imageName = "abubokor";
  const path = file?.path;
  const response = await sendImageToCloudinary(imageName, path);
  const secureUrl = response.secure_url;
  payload.image = secureUrl;

  const data = await About.create(payload);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "About created failed!");
  }

  return data;
};

const retrieveAllAbout = async () => {
  const data = await About.find().sort({ createdAt: -1 });

  if (!data || data.length < 1) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

const updateAbout = async (id, file, payload) => {
  if (file) {
    const imageName = "abubokor";
    const path = file?.path;
    const response = await sendImageToCloudinary(imageName, path);
    const secureUrl = response.secure_url;
    payload.image = secureUrl;
  }

  const data = await About.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "About update failed!");
  }

  return data;
};

const deleteAbout = async (id) => {
  const data = await About.findByIdAndDelete(id);

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "About delete failed!");
  }

  return data;
};

export const aboutServices = {
  createAbout,
  retrieveAllAbout,
  updateAbout,
  deleteAbout,
};
