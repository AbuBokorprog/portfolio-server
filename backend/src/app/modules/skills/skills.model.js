import { model, Schema } from "mongoose";

const skillsSchema = new Schema(
  {
    icon: {
      type: String,
      required: true,
      unique: true,
    },
    technology_name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = model("skills", skillsSchema);

export default Skill;
