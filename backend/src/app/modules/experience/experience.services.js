import httpStatus from 'http-status';
import AppError from '../../errors/appError.js';
import Experience from './experience.model.js';

const createExperience = async (payload) => {
  const data = await Experience.create(payload);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Experience created failed!');
  }

  return data;
};

const retrieveAllExperience = async () => {
  const data = await Experience.find();

  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found!');
  }

  return data;
};
const retrieveSingleExperience = async (id) => {
  const data = await Experience.findById(id);

  if (!data | (data.length < 1)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'No data found!');
  }

  return data;
};

const updateExperience = async (id, payload) => {
  const data = await Experience.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Experience update failed!');
  }

  return data;
};

const deleteExperience = async (id) => {
  const data = await Experience.create(id);

  if (!data) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Experience delete failed!');
  }

  return data;
};

export const experienceServices = {
  createExperience,
  retrieveAllExperience,
  updateExperience,
  deleteExperience,
  retrieveSingleExperience,
};
