import { model, Schema } from 'mongoose';

const course = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    completionDate: {
      type: Date,
    },
    skillsCovered: {
      type: Array,
    },
    certificateAvailable: {
      type: Boolean,
    },
    certificateUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const courseModel = model('course', course);
