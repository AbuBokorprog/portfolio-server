import express from 'express';
import { aboutRoute } from '../modules/about/about.route.js';
import { SkillRoute } from '../modules/skills/skills.route.js';
import { ProjectCategoryRoute } from '../modules/projectCategory/project.category.route.js';
import { ProjectRoute } from '../modules/projects/projects.route.js';
import { BlogRoute } from '../modules/blogs/blogs.route.js';
import { educationRoute } from '../modules/education/education.route.js';
import { experienceRoute } from '../modules/experience/experience.route.js';
import { userRoute } from '../modules/users/user.route.js';
import { authRoute } from '../modules/auth/auth.route.js';
import { SendMailRoute } from '../modules/sendEmail/send.mail.route.js';
import { ReportRoute } from '../modules/reports/reports.route.js';

const router = express.Router();

const appRouter = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/about',
    route: aboutRoute,
  },
  {
    path: '/skills',
    route: SkillRoute,
  },
  {
    path: '/projects-category',
    route: ProjectCategoryRoute,
  },
  {
    path: '/projects',
    route: ProjectRoute,
  },
  {
    path: '/blogs',
    route: BlogRoute,
  },
  {
    path: '/education',
    route: educationRoute,
  },
  {
    path: '/experience',
    route: experienceRoute,
  },
  {
    path: '/reports',
    route: ReportRoute,
  },
  {
    path: '/send-mail',
    route: SendMailRoute,
  },
];

appRouter.forEach((route) => router.use(route.path, route.route));

export default router;
