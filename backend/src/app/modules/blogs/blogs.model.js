import { model, Schema } from 'mongoose';

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
    category: {
      type: Array,
      required: [true, 'Category is required'],
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

const Blogs = model('blogs', blogsSchema);
export default Blogs;
