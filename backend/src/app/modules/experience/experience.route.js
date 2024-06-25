import express from "express";
import { experienceControllers } from "./experience.controllers";
const route = express.Router();

route.post("/", experienceControllers.createExperience);
route.get("/", experienceControllers.retrieveAllExperience);
route.put("/:id", experienceControllers.updateExperience);
route.delete("/:id", experienceControllers.deleteExperience);

export const experienceRoute = route;
