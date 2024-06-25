import express from "express";
import { experienceControllers } from "./experience.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createExperienceValidationSchema,
  updateExperienceValidationSchema,
} from "./experience.validation.js";
const route = express.Router();

route.post(
  "/",
  validateRequest(createExperienceValidationSchema),
  experienceControllers.createExperience
);
route.get("/", experienceControllers.retrieveAllExperience);
route.put(
  "/:id",
  validateRequest(updateExperienceValidationSchema),
  experienceControllers.updateExperience
);
route.delete("/:id", experienceControllers.deleteExperience);

export const experienceRoute = route;
