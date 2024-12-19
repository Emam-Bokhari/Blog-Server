import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: Schema.ObjectId,
      required: true,
      // ref: "users"
    },
    isDeleted: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true },
);

export const Blog = model('Blog', blogSchema);
