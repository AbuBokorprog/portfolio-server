import ProjectCategory from "./project.category.model.js";

const createProjectCategory = async (payload) => {
  const data = await ProjectCategory.create(payload);

  return data;
};

const retrieveAllProjectCategory = async () => {
  const data = await ProjectCategory.find();

  return data;
};

const updateProjectCategory = async () => {};

const deleteProjectCategory = async (id) => {
  const data = await ProjectCategory.findByIdAndDelete(id);
  return data;
};

export const ProjectCategoryServices = {
  createProjectCategory,
  retrieveAllProjectCategory,
  updateProjectCategory,
  deleteProjectCategory,
};
