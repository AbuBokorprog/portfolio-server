import { catchAsync } from "../../utils/catchAsync.js";
import { successResponse } from "../../utils/sucessResponse.js";
import { userServices } from "./users.services.js";

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  const data = await userServices.createUser(req.file, userData);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Admin created successfully!",
    data,
  });
});

export const userControllers = { createUser };
