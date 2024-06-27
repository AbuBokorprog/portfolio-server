import express from "express";
import { ProjectsControllers } from "./projects.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createProjectValidation,
  updateProjectValidation,
} from "./project.validation.js";
import Auth from "../../middleware/auth.js";
import { upload } from "../../utils/sendingImageToCloudinary.js";

const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  upload.single("file"),
  validateRequest(createProjectValidation),
  ProjectsControllers.createProjects
);

route.get("/", ProjectsControllers.retrieveAllProjects);

route.get("/:id", ProjectsControllers.retrieveSingleProject);

route.put(
  "/:id",
  Auth("admin"),
  validateRequest(updateProjectValidation),
  ProjectsControllers.updateProjects
);

route.delete("/:id", Auth("admin"), ProjectsControllers.deleteProjects);

export const ProjectRoute = route;
