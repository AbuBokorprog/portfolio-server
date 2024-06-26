import express from "express";
import { authControllers } from "./auth.controllers.js";
const route = express.Router();

route.post("/login", authControllers.loginUser);

export const authRoute = route;
