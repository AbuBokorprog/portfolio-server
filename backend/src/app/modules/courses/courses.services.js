import httpStatus from 'http-status';
import AppError from '../../errors/appError.js';
import { sendImageToCloudinary } from '../../utils/sendingImageToCloudinary.js';
import { courseModel } from './courses.model.js';

const createCourse = async (file, payload) => {
  const imageName = `${payload?.title}-${Date.now()}`;
  const path = file?.path;
  const response = await sendImageToCloudinary(imageName, path);
  const secureUrl = response.secureUrl;
  payload.image = secureUrl || file.path;

  const data = await courseModel.create(payload);

  return data;
};
const retrieveAllCourses = async () => {
  const data = await courseModel.find();

  return data;
};
const courseUpdate = async (id, file, payload) => {
  const isExistCourse = await courseModel.findById(id);

  if (file) {
    const imageName = `${payload?.title}-${Date.now()}`;
    const path = file?.path;
    const response = await sendImageToCloudinary(imageName, path);
    const secureUrl = response.secure_url;
    payload.image = secureUrl || file.path;
  }

  if (!isExistCourse) {
    throw new AppError(httpStatus.NOT_FOUND, 'Not found!');
  }

  const data = await courseModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return data;
};
const courseDelete = async (id) => {
  const data = await courseModel.findByIdAndDelete(id);

  return data;
};

export const courseService = {
  createCourse,
  retrieveAllCourses,
  courseUpdate,
  courseDelete,
};
