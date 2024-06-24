import express from "express";
import { aboutRoute } from "../modules/about/about.route.js";
const router = express.Router();

const appRouter = [
  {
    path: "/about",
    route: aboutRoute,
  },
];

appRouter.forEach((route) => router.use(route.path, route.route));

export default router;
