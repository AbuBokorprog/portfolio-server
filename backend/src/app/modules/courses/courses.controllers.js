import { catchAsync } from '../../utils/catchAsync.js';
import { successResponse } from '../../utils/sucessResponse.js';
import { courseService } from './courses.services.js';

const createCourse = catchAsync(async (req, res) => {
  const data = await courseService.createCourse(req.file, req.body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Course created successfully!',
    data: data,
  });
});

const retrieveAllCourses = catchAsync(async (req, res) => {
  const data = await courseService.retrieveAllCourses();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Retrieve courses successfully!',
    data: data,
  });
});
const courseUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await courseService.courseUpdate(id, req.file, req.body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Course updated successfully!',
    data: data,
  });
});

const courseDelete = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await courseService.courseDelete(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Course deleted successfully!',
    data: data,
  });
});

export const courseController = {
  createCourse,
  retrieveAllCourses,
  courseUpdate,
  courseDelete,
};
