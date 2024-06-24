import Projects from "./projects.model.js";

const createProjects = async (payload) => {
  const data = await Projects.create(payload);

  return data;
};

const retrieveAllProjects = async () => {
  const data = await Projects.find();

  return data;
};

const retrieveSingleProject = async (id) => {
  const data = await Projects.findById(id);

  return data;
};

const updateProjects = async (id, payload) => {
  const data = await Projects.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return data;
};

const deleteProjects = async (id) => {
  const data = await Projects.findByIdAndDelete(id);
  return data;
};

export const ProjectsServices = {
  createProjects,
  retrieveAllProjects,
  retrieveSingleProject,
  updateProjects,
  deleteProjects,
};
