import express from 'express';
import { courseController } from './courses.controllers.js';
const route = express.Router();

route.post('/', courseController.createCourse);
route.get('/', courseController.retrieveAllCourses);
route.patch('/:id', courseController.courseUpdate);
route.delete('/:id', courseController.courseDelete);

export const courseRoute = route;
