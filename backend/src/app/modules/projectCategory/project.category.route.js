import express from "express";
import { ProjectCategoryControllers } from "./project.category.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createProjectCategoryValidationSchema,
  updateProjectCategoryValidationSchema,
} from "./projectCategoryValidation.js";
import Auth from "../../middleware/auth.js";

const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  validateRequest(createProjectCategoryValidationSchema),
  ProjectCategoryControllers.createProjectCategory
);

route.get(
  "/",

  ProjectCategoryControllers.retrieveAllProjectCategory
);

route.put(
  "/:id",
  Auth("admin"),
  validateRequest(updateProjectCategoryValidationSchema),
  ProjectCategoryControllers.updateProjectCategory
);

route.delete(
  "/:id",
  Auth("admin"),
  ProjectCategoryControllers.deleteProjectCategory
);

export const ProjectCategoryRoute = route;
