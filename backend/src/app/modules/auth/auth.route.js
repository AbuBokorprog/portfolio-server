import express from "express";
const route = express.Router();

route.post("/login");

export const authRoute = route;
