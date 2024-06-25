import express from "express";
import { ProjectsControllers } from "./projects.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createProjectValidation,
  updateProjectValidation,
} from "./project.validation.js";

const route = express.Router();

route.post(
  "/",
  validateRequest(createProjectValidation),
  ProjectsControllers.createProjects
);

route.get("/", ProjectsControllers.retrieveAllProjects);

route.get("/:id", ProjectsControllers.retrieveSingleProject);

route.put(
  "/:id",
  validateRequest(updateProjectValidation),
  ProjectsControllers.updateProjects
);

route.delete("/:id", ProjectsControllers.deleteProjects);

export const ProjectRoute = route;
