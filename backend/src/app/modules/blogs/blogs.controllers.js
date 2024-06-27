import { catchAsync } from "../../utils/catchAsync.js";
import { successResponse } from "../../utils/sucessResponse.js";
import { BlogsServices } from "./blogs.services.js";

const createBlogs = catchAsync(async (req, res) => {
  const newData = req.body;

  const data = await BlogsServices.createBlogs(req.file, newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs created successfully!",
    data: data,
  });
});

const retrieveAllBlogs = catchAsync(async (req, res) => {
  const data = await BlogsServices.retrieveAllBlogs();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve all successfully!",
    data,
  });
});
const retrieveSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await BlogsServices.retrieveSingleBlog(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve single Blog successfully!",
    data,
  });
});

const updateBlogs = catchAsync(async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const data = await BlogsServices.updateBlogs(id, req?.file, newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog update successfully!",
    data,
  });
});

const deleteBlogs = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await BlogsServices.deleteBlogs(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs deleted successfully!",
    data,
  });
});

export const BlogsControllers = {
  createBlogs,
  retrieveAllBlogs,
  retrieveSingleBlog,
  updateBlogs,
  deleteBlogs,
};
