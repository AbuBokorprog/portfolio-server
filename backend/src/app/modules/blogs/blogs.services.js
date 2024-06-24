import Blogs from "./blogs.model.js";

const createBlogs = async (payload) => {
  const data = await Blogs.create(payload);

  return data;
};

const retrieveAllBlogs = async () => {
  const data = await Blogs.find();

  return data;
};

const retrieveSingleBlog = async (id) => {
  const data = await Blogs.findById(id);

  return data;
};

const updateBlogs = async (id, payload) => {
  const data = await Blogs.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return data;
};

const deleteBlogs = async (id) => {
  const data = await Blogs.findByIdAndDelete(id);
  return data;
};

export const BlogsServices = {
  createBlogs,
  retrieveAllBlogs,
  retrieveSingleBlog,
  updateBlogs,
  deleteBlogs,
};
