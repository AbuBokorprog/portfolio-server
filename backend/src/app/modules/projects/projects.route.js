import express from "express";
import { ProjectsControllers } from "./projects.controllers.js";

const route = express.Router();

route.post("/", ProjectsControllers.createProjects);
route.get("/", ProjectsControllers.retrieveAllProjects);
route.get("/:id", ProjectsControllers.retrieveSingleProject);
route.patch("/:id", ProjectsControllers.updateProjects);
route.delete("/:id", ProjectsControllers.deleteProjects);

export const ProjectRoute = route;
