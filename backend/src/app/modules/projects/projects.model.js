import { Schema, model } from "mongoose";

const projectsSchema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  projects_name: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  github_url: {
    type: String,
    required: true,
    unique: true,
  },
  View_url: {
    type: String,
    required: true,
    unique: true,
  },
});

const Projects = model("project", projectsSchema);

export default Projects;
