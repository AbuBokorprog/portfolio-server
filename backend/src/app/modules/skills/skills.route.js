import express from "express";
import { SkillControllers } from "./skills.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createSkillValidationSchema,
  updateSkillValidationSchema,
} from "./skills.validation.js";

const route = express.Router();

route.post(
  "/",
  validateRequest(createSkillValidationSchema),
  SkillControllers.createSkill
);

route.get("/", SkillControllers.retrieveAllSkill);

route.put(
  "/:id",
  validateRequest(updateSkillValidationSchema),
  SkillControllers.updateSkill
);

route.delete("/:id", SkillControllers.deleteSkill);

export const SkillRoute = route;
