import express from "express";
import { aboutControllers } from "./about.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createAboutValidationSchema,
  updateAboutValidationSchema,
} from "../about/about.validation.js";
import Auth from "../../middleware/auth.js";
const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  validateRequest(createAboutValidationSchema),
  aboutControllers.createAbout
);

route.get("/", aboutControllers.retrieveAllAbout);

route.put(
  "/:id",
  Auth("admin"),
  validateRequest(updateAboutValidationSchema),
  aboutControllers.updateAbout
);

route.delete("/:id", Auth("admin"), aboutControllers.deleteAbout);

export const aboutRoute = route;
