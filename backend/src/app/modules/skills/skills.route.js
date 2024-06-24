import express from "express";
import { SkillControllers } from "./skills.controllers.js";

const route = express.Router();

route.post("/", SkillControllers.createSkill);
route.get("/", SkillControllers.retrieveAllSkill);
route.patch("/:id", SkillControllers.updateSkill);
route.delete("/:id", SkillControllers.deleteSkill);

export const SkillRoute = route;
