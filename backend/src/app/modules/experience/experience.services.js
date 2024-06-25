import Experience from "./experience.model.js";

const createExperience = async (payload) => {
  const data = await Experience.create(payload);

  return data;
};

const retrieveAllExperience = async () => {
  const data = await Experience.find();

  return data;
};

const updateExperience = async (id, payload) => {
  const data = await Experience.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return data;
};

const deleteExperience = async (id) => {
  const data = await Experience.create(id);

  return data;
};

export const experienceServices = {
  createExperience,
  retrieveAllExperience,
  updateExperience,
  deleteExperience,
};
