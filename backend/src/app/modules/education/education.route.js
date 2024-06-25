import express from "express";
import { educationControllers } from "./education.controllers.js";
const route = express.Router();

route.post("/", educationControllers.createEducation);
route.get("/", educationControllers.retrieveAllEducation);
route.put("/:id", educationControllers.updateEducation);
route.delete("/:id", educationControllers.deleteEducation);

export const educationRoute = route;
