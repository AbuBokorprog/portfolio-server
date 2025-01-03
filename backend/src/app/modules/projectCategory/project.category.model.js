import { model, Schema } from "mongoose";

const projectCategorySchema = new Schema({
  category_name: {
    type: String,
    required: true,
    unique: true,
  },
});

const ProjectCategory = model("project-category", projectCategorySchema);

export default ProjectCategory;
