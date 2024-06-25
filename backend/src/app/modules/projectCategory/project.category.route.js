import express from "express";
import { ProjectCategoryControllers } from "./project.category.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createProjectCategoryValidationSchema,
  updateProjectCategoryValidationSchema,
} from "./projectCategoryValidation.js";

const route = express.Router();

route.post(
  "/",
  validateRequest(createProjectCategoryValidationSchema),
  ProjectCategoryControllers.createProjectCategory
);

route.get("/", ProjectCategoryControllers.retrieveAllProjectCategory);

route.put(
  "/:id",
  validateRequest(updateProjectCategoryValidationSchema),
  ProjectCategoryControllers.updateProjectCategory
);

route.delete("/:id", ProjectCategoryControllers.deleteProjectCategory);

export const ProjectCategoryRoute = route;
