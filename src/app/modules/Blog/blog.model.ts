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

// query middleware
blogSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } })

  next()

})

blogSchema.pre("findOne", async function (next) {
  this.findOne({ isDeleted: { $ne: true } })
  next()
})

// aggregate middleware
blogSchema.pre("aggregate", async function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
  next()
})

blogSchema.pre("aggregate", async function (next) {
  this.pipeline().unshift({ $project: { isDeleted: 0 } });
  next()
})

export const Blog = model('Blog', blogSchema);
