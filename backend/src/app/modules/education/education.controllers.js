import { catchAsync } from '../../utils/catchAsync.js';
import { successResponse } from '../../utils/sucessResponse.js';
import { educationServices } from './education.services.js';

const createEducation = catchAsync(async (req, res) => {
  const newData = req.body;

  const data = await educationServices.createEducation(newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education Created successfully!',
    data,
  });
});

const retrieveAllEducation = catchAsync(async (req, res) => {
  const data = await educationServices.retrieveAllEducation();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education retrieve successfully!',
    data,
  });
});
const retrieveSingleEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await educationServices.retrieveSingleEducation(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education retrieve successfully!',
    data,
  });
});

const updateEducation = catchAsync(async (req, res) => {
  const newData = req.body;
  const { id } = req.params;
  const data = await educationServices.updateEducation(id, newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education updated successfully!',
    data,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await educationServices.deleteEducation(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education deleted successfully!',
    data,
  });
});

export const educationControllers = {
  createEducation,
  retrieveAllEducation,
  updateEducation,
  deleteEducation,
  retrieveSingleEducation,
};
