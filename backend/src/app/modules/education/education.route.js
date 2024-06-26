import express from "express";
import { educationControllers } from "./education.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createEducationValidationSchema,
  updateEducationValidationSchema,
} from "./education.validation.js";
import Auth from "../../middleware/auth.js";
const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  validateRequest(createEducationValidationSchema),
  educationControllers.createEducation
);
route.get("/", Auth("admin"), educationControllers.retrieveAllEducation);
route.put(
  "/:id",
  Auth("admin"),
  validateRequest(updateEducationValidationSchema),
  educationControllers.updateEducation
);
route.delete("/:id", Auth("admin"), educationControllers.deleteEducation);

export const educationRoute = route;
