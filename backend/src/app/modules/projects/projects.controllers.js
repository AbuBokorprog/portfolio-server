import { catchAsync } from "../../utils/catchAsync.js";
import { successResponse } from "../../utils/sucessResponse.js";
import { ProjectsServices } from "./projects.services.js";

const createProjects = catchAsync(async (req, res) => {
  const newData = req.body;

  const data = await ProjectsServices.createProjects(newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects created successfully!",
    data: data,
  });
});

const retrieveAllProjects = catchAsync(async (req, res) => {
  const data = await ProjectsServices.retrieveAllProjects();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve all successfully!",
    data,
  });
});
const retrieveSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await ProjectsServices.retrieveSingleProjects(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve single project successfully!",
    data,
  });
});

const updateProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const data = await ProjectsServices.updateProjects(id, newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "project update successfully!",
    data,
  });
});

const deleteProjects = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await ProjectsServices.deleteProjects(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects deleted successfully!",
    data,
  });
});

export const ProjectsControllers = {
  createProjects,
  retrieveAllProjects,
  retrieveSingleProject,
  updateProjects,
  deleteProjects,
};
