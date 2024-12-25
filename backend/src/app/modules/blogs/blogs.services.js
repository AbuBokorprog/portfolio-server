import httpStatus from 'http-status';
import AppError from '../../errors/appError.js';
import Blogs from './blogs.model.js';
import { sendImageToCloudinary } from '../../utils/sendingImageToCloudinary.js';

const createBlogs = async (file, payload) => {
  const imageName = `${payload?.title}-${Date.now()}`;
  const path = file?.path;
  const response = await sendImageToCloudinary(imageName, path);
  const secureUrl = response.secureUrl;
  payload.thumbnail = secureUrl || file.path;

  const data = await Blogs.create(payload);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Blog created failed!');
  }

  return data;
};

const retrieveAllBlogs = async () => {
  const data = await Blogs.find().sort({ createdAt: -1 });
  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.NOT_FOUND, 'No data found!');
  }
  return data;
};

const retrieveSingleBlog = async (id) => {
  const data = await Blogs.findById(id);
  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, 'No data found!');
  }
  return data;
};

const updateBlogs = async (id, file, payload) => {
  const currentBlog = await Blogs.findById(id);

  if (!currentBlog) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found!');
  }

  if (file?.path) {
    const imageName = payload?.title ? payload?.title : currentBlog.title;
    const path = file?.path;
    const response = await sendImageToCloudinary(imageName, path);
    const secureUrl = response.secure_url;
    payload.thumbnail = secureUrl;
  }

  const data = await Blogs.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog update failed!');
  }

  return data;
};

const deleteBlogs = async (id) => {
  const data = await Blogs.findByIdAndDelete(id);

  if (!data) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog deleted failed!');
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
