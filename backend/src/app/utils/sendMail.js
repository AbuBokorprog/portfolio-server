import nodemailer from "nodemailer";
import config from "../config/index.js";

export const sendMail = ({ to, subject, message }) => {
  // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: config.node_env === "production", // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "abubokor1066@gmail.com",
      pass: "bbhh jdeh wvfc pwhy",
    },
  });

  const mailOptions = {
    from: "abubokor1066@gmail.com", // sender address
    to: `${to}`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `Hello ${to}`, // plain text body
    html: `${message}`, // html body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error", error);
      console.log("hi");
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
