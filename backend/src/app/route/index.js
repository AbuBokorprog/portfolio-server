import express from "express";
import { aboutRoute } from "../modules/about/about.route.js";
import { SkillRoute } from "../modules/skills/skills.route.js";
import { ProjectCategoryRoute } from "../modules/projectCategory/project.category.route.js";
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
  {
    path: "/projects-category",
    route: ProjectCategoryRoute,
  },
];

appRouter.forEach((route) => router.use(route.path, route.route));

export default router;
