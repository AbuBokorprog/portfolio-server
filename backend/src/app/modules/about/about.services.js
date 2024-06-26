import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import { About } from "./about.model.js";

const createAbout = async (payload) => {
  const data = await About.create(payload);

  return data;
};

const retrieveAllAbout = async () => {
  const data = await About.find().sort({ createdAt: -1 });

  if (!data || data.length < 1) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

const updateAbout = async (id, payload) => {
  const data = await About.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

const deleteAbout = async (id) => {
  const data = await About.findByIdAndDelete(id);

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

export const aboutServices = {
  createAbout,
  retrieveAllAbout,
  updateAbout,
  deleteAbout,
};
