import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import Skill from "./skills.model.js";
import { sendImageToCloudinary } from "../../utils/sendingImageToCloudinary.js";

const createSkill = async (file, payload) => {
  const imageName = payload?.technology_name;
  const path = file?.path;
  const response = await sendImageToCloudinary(imageName, path);
  const secureUrl = response.secure_url;
  payload.icon = secureUrl;

  const data = await Skill.create(payload);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "Skill created failed!");
  }

  return data;
};

const retrieveAllSkill = async () => {
  const data = await Skill.find().sort({ createdAt: 1 });

  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.BAD_REQUEST, "No data found!");
  }

  return data;
};

const updateSkill = async (id, file, payload) => {
  const previousSkill = await Skill.findById(id);

  if (!previousSkill) {
    throw new AppError(httpStatus.NOT_FOUND, "Skill not found!");
  }

  if (file.path) {
    const imageName = payload?.technology_name
      ? payload?.technology_name
      : previousSkill?.technology_name;
    const path = file?.path;
    const response = await sendImageToCloudinary(imageName, path);
    const secureUrl = response.secure_url;
    payload.icon = secureUrl;
  }

  const data = await Skill.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "Skill update failed!");
  }

  return data;
};

const deleteSkill = async (id) => {
  const data = await Skill.findByIdAndDelete(id);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "skill delete failed!");
  }

  return data;
};

export const SkillServices = {
  createSkill,
  retrieveAllSkill,
  updateSkill,
  deleteSkill,
};
