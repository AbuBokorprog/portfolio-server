import { model, Schema } from "mongoose";

const educationSchema = new Schema({
  degree: {
    type: String,
    required: true,
    unique: true,
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
  },
  institute_name: {
    type: String,
    required: true,
  },
  institute_location: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
    unique: true,
  },
});

const Education = model("education", educationSchema);
export default Education;
