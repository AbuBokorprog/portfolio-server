import express from "express";
import { BlogsControllers } from "./blogs.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createBlogValidationSchema,
  updateBlogValidationSchema,
} from "./blogs.validation.js";
const route = express.Router();

route.post(
  "/",
  validateRequest(createBlogValidationSchema),
  BlogsControllers.createBlogs
);
route.get("/", BlogsControllers.retrieveAllBlogs);
route.get("/:id", BlogsControllers.retrieveSingleBlog);
route.put(
  "/:id",
  validateRequest(updateBlogValidationSchema),
  BlogsControllers.updateBlogs
);
route.delete("/:id", BlogsControllers.deleteBlogs);

export const BlogRoute = route;
