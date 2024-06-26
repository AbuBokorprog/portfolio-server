import { catchAsync } from "../../utils/catchAsync";
import { successResponse } from "../../utils/sucessResponse";
import { authServices } from "./auth.services";

const loginUser = catchAsync(async (req, res) => {
  const data = authServices.loginUser(req.body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Login successful",
    data,
  });
});

export const authControllers = { loginUser };
