import express from "express";
import { aboutControllers } from "./about.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createAboutValidationSchema,
  updateAboutValidationSchema,
} from "../about/about.validation.js";
const route = express.Router();

route.post(
  "/",
  validateRequest(createAboutValidationSchema),
  aboutControllers.createAbout
);

route.get("/", aboutControllers.retrieveAllAbout);

route.put(
  "/:id",
  validateRequest(updateAboutValidationSchema),
  aboutControllers.updateAbout
);

route.delete("/:id", aboutControllers.deleteAbout);

export const aboutRoute = route;
