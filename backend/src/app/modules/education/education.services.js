import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import Education from "./education.model.js";

const createEducation = async (payload) => {
  const data = await Education.create(payload);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "Education created failed!");
  }

  return data;
};

const retrieveAllEducation = async () => {
  const data = await Education.find().sort({ createdAt: -1 });

  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

const updateEducation = async (id, payload) => {
  const data = await Education.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

const deleteEducation = async (id) => {
  const data = await Education.findByIdAndDelete(id);

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

export const educationServices = {
  createEducation,
  retrieveAllEducation,
  updateEducation,
  deleteEducation,
};
