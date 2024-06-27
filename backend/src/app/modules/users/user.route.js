import express from "express";
import { userControllers } from "./user.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import { createUserValidationSchema } from "./user.validation.js";
import { upload } from "../../utils/sendingImageToCloudinary.js";
const route = express.Router();

route.post(
  "/create-admin",
  upload.single("file"),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createUserValidationSchema),
  userControllers.createUser
);

export const userRoute = route;
