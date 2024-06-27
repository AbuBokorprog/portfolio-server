import express from "express";
import { SkillControllers } from "./skills.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createSkillValidationSchema,
  updateSkillValidationSchema,
} from "./skills.validation.js";
import Auth from "../../middleware/auth.js";
import { upload } from "../../utils/sendingImageToCloudinary.js";

const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  upload.single("file"),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createSkillValidationSchema),
  SkillControllers.createSkill
);

route.get("/", SkillControllers.retrieveAllSkill);

route.put(
  "/:id",
  Auth("admin"),
  upload.single("file"),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(updateSkillValidationSchema),
  SkillControllers.updateSkill
);

route.delete("/:id", Auth("admin"), SkillControllers.deleteSkill);

export const SkillRoute = route;
