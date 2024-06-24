import express from "express";
import { aboutRoute } from "../modules/about/about.route.js";
import { SkillRoute } from "../modules/skills/skills.route.js";
const router = express.Router();

const appRouter = [
  {
    path: "/about",
    route: aboutRoute,
  },
  {
    path: "/skills",
    route: SkillRoute,
  },
];

appRouter.forEach((route) => router.use(route.path, route.route));

export default router;
