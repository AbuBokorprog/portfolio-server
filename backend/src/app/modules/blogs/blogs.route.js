import express from "express";
import { BlogsControllers } from "./blogs.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createBlogValidationSchema,
  updateBlogValidationSchema,
} from "./blogs.validation.js";
import Auth from "../../middleware/auth.js";

const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  validateRequest(createBlogValidationSchema),
  BlogsControllers.createBlogs
);
route.get("/", Auth("admin"), BlogsControllers.retrieveAllBlogs);
route.get("/:id", Auth("admin"), BlogsControllers.retrieveSingleBlog);
route.put(
  "/:id",
  Auth("admin"),
  validateRequest(updateBlogValidationSchema),
  BlogsControllers.updateBlogs
);
route.delete("/:id", Auth("admin"), BlogsControllers.deleteBlogs);

export const BlogRoute = route;
