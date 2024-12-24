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
    categoryId: {
      type: Schema.Types.ObjectId,
      required: [true, 'CategoryId are required'],
      ref: 'project-category',
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
