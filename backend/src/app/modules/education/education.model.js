import { model, Schema } from "mongoose";

const educationSchema = new Schema({
  degree: {
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

const Education = model("education", educationSchema);
export default Education;