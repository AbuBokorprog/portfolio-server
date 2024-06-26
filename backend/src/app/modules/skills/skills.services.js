import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import Skill from "./skills.model.js";

const createSkill = async (payload) => {
  const data = await Skill.create(payload);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, "Skill created failed!");
  }

  return data;
};

const retrieveAllSkill = async () => {
  const data = await Skill.find();

  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.BAD_REQUEST, "No data found!");
  }

  return data;
};

const updateSkill = async (id, payload) => {
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
