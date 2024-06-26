import express from "express";
import { userControllers } from "./user.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import { createUserValidationSchema } from "./user.validation.js";
const route = express.Router();

route.post(
  "/create-admin",
  validateRequest(createUserValidationSchema),
  userControllers.createUser
);

export const userRoute = route;
