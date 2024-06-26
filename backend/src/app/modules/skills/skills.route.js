import express from "express";
import { SkillControllers } from "./skills.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createSkillValidationSchema,
  updateSkillValidationSchema,
} from "./skills.validation.js";
import Auth from "../../middleware/auth.js";

const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  validateRequest(createSkillValidationSchema),
  SkillControllers.createSkill
);

route.get("/", Auth("admin"), SkillControllers.retrieveAllSkill);

route.put(
  "/:id",
  Auth("admin"),
  validateRequest(updateSkillValidationSchema),
  SkillControllers.updateSkill
);

route.delete("/:id", Auth("admin"), SkillControllers.deleteSkill);

export const SkillRoute = route;
