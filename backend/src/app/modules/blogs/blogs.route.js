import express from "express";
import { BlogsControllers } from "./blogs.controllers.js";
import validateRequest from "../../utils/validationRequest.js";
import {
  createBlogValidationSchema,
  updateBlogValidationSchema,
} from "./blogs.validation.js";
import Auth from "../../middleware/auth.js";
import { upload } from "../../utils/sendingImageToCloudinary.js";

const route = express.Router();

route.post(
  "/",
  Auth("admin"),
  upload.single("file"),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(createBlogValidationSchema),
  BlogsControllers.createBlogs
);

route.get("/", BlogsControllers.retrieveAllBlogs);

route.get("/:id", BlogsControllers.retrieveSingleBlog);

route.put(
  "/:id",
  Auth("admin"),
  upload.single("file"),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(updateBlogValidationSchema),
  BlogsControllers.updateBlogs
);

route.delete("/:id", Auth("admin"), BlogsControllers.deleteBlogs);

export const BlogRoute = route;
