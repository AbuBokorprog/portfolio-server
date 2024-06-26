import { catchAsync } from "../../utils/catchAsync.js";
import { successResponse } from "../../utils/sucessResponse.js";
import { authServices } from "./auth.services.js";

const loginUser = catchAsync(async (req, res) => {
  const data = await authServices.loginUser(req.body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Login successful",
    data,
  });
});

export const authControllers = { loginUser };
