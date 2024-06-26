import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import ProjectCategory from "./project.category.model.js";

const createProjectCategory = async (payload) => {
  const data = await ProjectCategory.create(payload);

  if (!data) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Project category created failed!"
    );
  }

  return data;
};

const retrieveAllProjectCategory = async () => {
  const data = await ProjectCategory.find();

  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.BAD_REQUEST, "No data found!");
  }

  return data;
};

const updateProjectCategory = async (id, payload) => {
  const data = await ProjectCategory.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Project category update failed!"
    );
  }

  return data;
};

const deleteProjectCategory = async (id) => {
  const data = await ProjectCategory.findByIdAndDelete(id);

  if (!data) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Project category delete failed!"
    );
  }

  return data;
};

export const ProjectCategoryServices = {
  createProjectCategory,
  retrieveAllProjectCategory,
  updateProjectCategory,
  deleteProjectCategory,
};
