import express from "express";
import { experienceControllers } from "./experience.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createExperienceValidationSchema,
  updateExperienceValidationSchema,
} from "./experience.validation.js";
import Auth from "../../middleware/auth.js";
const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  validateRequest(createExperienceValidationSchema),
  experienceControllers.createExperience
);
route.get("/", Auth("admin"), experienceControllers.retrieveAllExperience);
route.put(
  "/:id",
  Auth("admin"),
  validateRequest(updateExperienceValidationSchema),
  experienceControllers.updateExperience
);
route.delete("/:id", Auth("admin"), experienceControllers.deleteExperience);

export const experienceRoute = route;
