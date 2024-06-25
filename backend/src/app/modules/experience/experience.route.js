import express from "express";
const route = express.Router();

route.post("/");
route.get("/");
route.put("/:id");
route.delete("/:id");

export const experienceRoute = route;
