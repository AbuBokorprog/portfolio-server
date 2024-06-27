import { catchAsync } from "../../utils/catchAsync.js";
import { successResponse } from "../../utils/sucessResponse.js";
import { aboutServices } from "./about.services.js";

const createAbout = catchAsync(async (req, res) => {
  const newData = req.body;

  const data = await aboutServices.createAbout(req.file, newData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "About created successfully!",
    data: data,
  });
});

const retrieveAllAbout = catchAsync(async (req, res) => {
  const data = await aboutServices.retrieveAllAbout();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Retrieve all successfully!",
    data,
  });
});

const updateAbout = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await aboutServices.updateAbout(id, req.file, req.body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "About update successfully!",
    data,
  });
});

const deleteAbout = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await aboutServices.deleteAbout(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "About deleted successfully!",
    data,
  });
});

export const aboutControllers = {
  createAbout,
  retrieveAllAbout,
  updateAbout,
  deleteAbout,
};
