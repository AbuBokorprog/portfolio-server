import httpStatus from "http-status";
import AppError from "../../errors/appError.js";
import Blogs from "./blogs.model.js";

const createBlogs = async (payload) => {
  const data = await Blogs.create(payload);

  return data;
};

const retrieveAllBlogs = async () => {
  const data = await Blogs.find().sort({ createdAt: -1 });
  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }
  return data;
};

const retrieveSingleBlog = async (id) => {
  const data = await Blogs.findById(id);
  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }
  return data;
};

const updateBlogs = async (id, payload) => {
  const data = await Blogs.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

const deleteBlogs = async (id) => {
  const data = await Blogs.findByIdAndDelete(id);

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, "No data found!");
  }

  return data;
};

export const BlogsServices = {
  createBlogs,
  retrieveAllBlogs,
  retrieveSingleBlog,
  updateBlogs,
  deleteBlogs,
};
