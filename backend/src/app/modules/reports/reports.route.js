import express from 'express';
import { ReportsController } from './reports.controller.js';
const route = express.Router();

route.get('/', ReportsController.getReports);

export const ReportRoute = route;
