import Blogs from '../blogs/blogs.model.js';
import Education from '../education/education.model.js';
import Experience from '../experience/experience.model.js';
import Projects from '../projects/projects.model.js';
import Skill from '../skills/skills.model.js';

const getReports = async () => {
  const totalProjects = await Projects.countDocuments({});
  const totalBlogs = await Blogs.countDocuments({});
  const totalSkills = await Skill.countDocuments({});
  const totalExperience = await Experience.countDocuments({});
  const totalEducation = await Education.countDocuments({});
  return {
    totalProjects,
    totalBlogs,
    totalSkills,
    totalExperience,
    totalEducation,
  };
};

export const ReportsServices = { getReports };
