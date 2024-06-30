import { sendMail } from "../../utils/sendMail.js";

export const sendMailServices = async (body) => {
  const to = body.to;
  const subject = body.subject;
  const message = body.message;

  sendMail(to, subject, message);
};
