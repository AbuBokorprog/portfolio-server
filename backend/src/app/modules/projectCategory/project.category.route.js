import express from "express";
import { ProjectCategoryControllers } from "./project.category.controllers.js";

const route = express.Router();

route.post("/", ProjectCategoryControllers.createProjectCategory);
route.get("/", ProjectCategoryControllers.retrieveAllProjectCategory);
route.patch("/:id", ProjectCategoryControllers.updateProjectCategory);
route.delete("/:id", ProjectCategoryControllers.deleteProjectCategory);

export const ProjectCategoryRoute = route;
