import { model, Schema } from "mongoose";

const experienceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  isPresent: {
    type: Boolean,
    required: true,
    default: false,
  },
  endTime: {
    type: Date,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
    unique: true,
  },
  company_location: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
    unique: true,
  },
});

const Experience = model("experience", experienceSchema);
export default Experience;
