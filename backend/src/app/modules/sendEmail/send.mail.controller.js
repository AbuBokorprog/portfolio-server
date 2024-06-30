import { catchAsync } from "../../utils/catchAsync.js";
import { successResponse } from "../../utils/sucessResponse.js";
import { sendMailServices } from "./send.mail.services.js";

// eslint-disable-next-line no-unused-vars
export const sendMailController = catchAsync(async (req, res) => {
  const body = req.body;
  const data = await sendMailServices(body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: "Send Mail",
    data,
  });
});
