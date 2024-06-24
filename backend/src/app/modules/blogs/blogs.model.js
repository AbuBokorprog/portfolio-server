import { model, Schema } from "mongoose";

const blogsSchema = new Schema(
  {
    thumbnail: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    articles: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blogs = model("blogs", blogsSchema);
export default Blogs;
