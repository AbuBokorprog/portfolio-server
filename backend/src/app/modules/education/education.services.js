import Education from "./education.model.js";

const createEducation = async (payload) => {
  const data = await Education.create(payload);

  return data;
};

const retrieveAllEducation = async () => {
  const data = await Education.find();

  return data;
};

const updateEducation = async (id, payload) => {
  const data = await Education.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return data;
};

const deleteEducation = async (id) => {
  const data = await Education.findByIdAndDelete(id);

  return data;
};

export const educationServices = {
  createEducation,
  retrieveAllEducation,
  updateEducation,
  deleteEducation,
};
