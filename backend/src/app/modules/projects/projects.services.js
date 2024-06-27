import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import Projects from "./projects.model.js";
import { sendImageToCloudinary } from "../../utils/sendingImageToCloudinary.js";

const createProjects = async (file, payload) => {
  // image name
  const imageName = `${payload.projects_name}`;
  // path
  const path = file?.path;
  // save cloudinary
  const response = await sendImageToCloudinary(imageName, path);

  const secureUrl = response.secure_url;
  payload.thumbnail = secureUrl;

  const data = await Projects.create(payload);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "Project created failed!");
  }

  return data;
};

const retrieveAllProjects = async () => {
  const data = await Projects.find().populate("categoryId");

  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.BAD_REQUEST, "No data found!");
  }

  return data;
};

const retrieveSingleProject = async (id) => {
  const data = await Projects.findById(id).populate("categoryId");

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "No data found!");
  }

  return data;
};

const updateProjects = async (id, file, payload) => {
  const previousData = await Projects.findById(id);

  if (previousData) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found!");
  }

  if (payload?.thumbnail) {
    const imageName = payload?.projects_name
      ? payload?.projects_name
      : previousData.projects_name;
    const path = file?.path;
    const response = await sendImageToCloudinary(imageName, path);
    const secureUrl = response.secure_url;
    payload.thumbnail = secureUrl;
  }

  const data = await Projects.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "Project update failed!");
  }

  return data;
};

const deleteProjects = async (id) => {
  const data = await Projects.findByIdAndDelete(id);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "Project delete failed!");
  }

  return data;
};

export const ProjectsServices = {
  createProjects,
  retrieveAllProjects,
  retrieveSingleProject,
  updateProjects,
  deleteProjects,
};
