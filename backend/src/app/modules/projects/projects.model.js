import { Schema, model } from "mongoose";

const projectsSchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      required: [true, "CategoryId are required"],
      ref: "project-category",
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail are required"],
    },
    projects_name: {
      type: String,
      required: [true, "Project name are required"],
    },
    short_description: {
      type: String,
      required: [true, "Short description are required"],
      // minLength: [200, "Short description have to minimum 200 character."],
      // maxLength: [350, "Short description have to maximum 350 character."],
    },
    skills: {
      type: Array,
      required: [true, "Skill are required"],
    },
    github_url: {
      type: String,
      unique: true,
    },
    view_url: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Projects = model("project", projectsSchema);

export default Projects;
