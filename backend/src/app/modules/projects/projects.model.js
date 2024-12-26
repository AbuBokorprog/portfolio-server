import { Schema, model } from 'mongoose';

const projectsSchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      required: [true, 'CategoryId are required'],
      ref: 'project-category',
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail are required'],
    },
    projects_name: {
      type: String,
      required: [true, 'Project name are required'],
    },
    key_features: {
      type: Array,
      default: [],
    },
    challenges: {
      type: Array,
      default: [],
    },
    completion_date: {
      type: Date,
      required: true,
    },
    duration: {
      type: String,
      default: '2 months',
      required: [true, 'Duration is required.'],
    },
    short_description: {
      type: String,
      required: [true, 'Short description are required'],
      minLength: [200, 'Short description have to minimum 200 character.'],
      maxLength: [450, 'Short description have to maximum 450 character.'],
    },
    skills: {
      type: Array,
      required: [true, 'Skill are required'],
    },
    github_url: {
      type: String,
    },
    view_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Projects = model('project', projectsSchema);

export default Projects;
