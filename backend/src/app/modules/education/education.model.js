import { model, Schema } from 'mongoose';

const educationSchema = new Schema({
  degree: {
    type: String,
    required: true,
    unique: true,
  },
  grade: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
  },
  isPresent: {
    type: Boolean,
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
  },
});

const Education = model('education', educationSchema);
export default Education;
