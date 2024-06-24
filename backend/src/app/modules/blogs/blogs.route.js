import express from "express";
import { BlogsControllers } from "./blogs.controllers.js";

const route = express.Router();

route.post("/", BlogsControllers.createBlogs);
route.get("/", BlogsControllers.retrieveAllBlogs);
route.get("/:id", BlogsControllers.retrieveSingleBlog);
route.patch("/:id", BlogsControllers.updateBlogs);
route.delete("/:id", BlogsControllers.deleteBlogs);

export const BlogRoute = route;
