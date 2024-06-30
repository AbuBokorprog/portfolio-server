import express from "express";
import { sendMailController } from "./send.mail.controller.js";
const route = express.Router();

route.post("/", sendMailController);

export const SendMailRoute = route;
