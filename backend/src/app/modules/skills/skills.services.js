import Skill from "./skills.model.js";

const createSkill = async (payload) => {
  const data = await Skill.create(payload);

  return data;
};

const retrieveAllSkill = async () => {
  const data = await Skill.find();

  return data;
};

const updateSkill = async () => {};

const deleteSkill = async (id) => {
  const data = await Skill.findByIdAndDelete(id);
  return data;
};

export const SkillServices = {
  createSkill,
  retrieveAllSkill,
  updateSkill,
  deleteSkill,
};
