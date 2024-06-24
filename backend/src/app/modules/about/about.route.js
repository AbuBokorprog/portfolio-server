import express from "express";
import { aboutControllers } from "./about.controllers.js";
const route = express.Router();

route.post("/", aboutControllers.createAbout);
route.get("/", aboutControllers.retrieveAllAbout);
route.patch("/:id", aboutControllers.updateAbout);
route.delete("/:id", aboutControllers.deleteAbout);

export const aboutRoute = route;
