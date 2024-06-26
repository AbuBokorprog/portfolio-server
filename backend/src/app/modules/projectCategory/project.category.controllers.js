import { catchAsync } from "../../utils/catchAsync.js";
import { successResponse } from "../../utils/sucessResponse.js";
import { ProjectCategoryServices } from "./project.category.services.js";

const createProjectCategory = catchAsync(async (req, res) => {
  const newData = req.body;

  const data = await ProjectCategoryServices.createProjectCategory(newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "ProjectCategory created successfully!",
    data: data,
  });
});

const retrieveAllProjectCategory = catchAsync(async (req, res) => {
  const data = await ProjectCategoryServices.retrieveAllProjectCategory();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve all successfully!",
    data,
  });
});

const updateProjectCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  const data = await ProjectCategoryServices.updateProjectCategory(id, newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project category updated successfully!",
    data,
  });
});

const deleteProjectCategory = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await ProjectCategoryServices.deleteProjectCategory(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "ProjectCategory deleted successfully!",
    data,
  });
});

export const ProjectCategoryControllers = {
  createProjectCategory,
  retrieveAllProjectCategory,
  updateProjectCategory,
  deleteProjectCategory,
};
