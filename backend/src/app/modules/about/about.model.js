import { model, Schema } from "mongoose";

const aboutSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const About = model("about", aboutSchema);
