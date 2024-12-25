import { catchAsync } from '../../utils/catchAsync.js';
import { successResponse } from '../../utils/sucessResponse.js';
import { experienceServices } from './experience.services.js';

const createExperience = catchAsync(async (req, res) => {
  const newData = req.body;

  const data = await experienceServices.createExperience(newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience Created successfully!',
    data,
  });
});

const retrieveAllExperience = catchAsync(async (req, res) => {
  const data = await experienceServices.retrieveAllExperience();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Retrieve all experience successfully!',
    data,
  });
});
const retrieveSingleExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await experienceServices.retrieveSingleExperience(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Retrieve experience successfully!',
    data,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const data = await experienceServices.updateExperience(id, newData);

  successResponse(res, {
    statusCode: 200,
    status: true,
    message: 'Experience updated successfully!',
    data,
  });
});

const deleteExperience = async (req, res) => {
  const { id } = req.params;

  const data = await experienceServices.deleteExperience(id);

  successResponse(res, {
    statusCode: 200,
    status: true,
    message: 'Experience deleted successfully!',
    data,
  });
};

export const experienceControllers = {
  createExperience,
  retrieveAllExperience,
  updateExperience,
  deleteExperience,
  retrieveSingleExperience,
};
