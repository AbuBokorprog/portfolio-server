import express from "express";
import { educationControllers } from "./education.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createEducationValidationSchema,
  updateEducationValidationSchema,
} from "./education.validation.js";
const route = express.Router();

route.post(
  "/",
  validateRequest(createEducationValidationSchema),
  educationControllers.createEducation
);
route.get("/", educationControllers.retrieveAllEducation);
route.put(
  "/:id",
  validateRequest(updateEducationValidationSchema),
  educationControllers.updateEducation
);
route.delete("/:id", educationControllers.deleteEducation);

export const educationRoute = route;
