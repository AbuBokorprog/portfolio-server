import { model, Schema } from "mongoose";

const experienceSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  short_description: {
    type: String,
    required: true,
    unique: true,
  },
  startTime: {
    type: Date,
    required: true,
    unique: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
});

const Experience = model("experience", experienceSchema);
export default Experience;