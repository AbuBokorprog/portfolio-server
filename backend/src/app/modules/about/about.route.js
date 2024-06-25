import express from "express";
import { aboutControllers } from "./about.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import aboutValidationSchema from "./about.validation.js";
const route = express.Router();

route.post(
  "/",
  validateRequest(aboutValidationSchema),
  aboutControllers.createAbout
);
route.get("/", aboutControllers.retrieveAllAbout);
route.patch("/:id", aboutControllers.updateAbout);
route.delete("/:id", aboutControllers.deleteAbout);

export const aboutRoute = route;
