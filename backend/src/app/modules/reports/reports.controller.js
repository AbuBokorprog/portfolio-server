import { catchAsync } from '../../utils/catchAsync.js';
import { successResponse } from '../../utils/sucessResponse.js';
import { ReportsServices } from './reports.service.js';

const getReports = catchAsync(async (req, res) => {
  const data = await ReportsServices.getReports();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Reports retrieve successfully!',
    data: data,
  });
});

export const ReportsController = { getReports };
