import { QueryBuilder } from '../../builder/QueryBuilder';
import { AppError } from '../../errors/AppError';
import { User } from '../User/user.model';
import { blogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
    const result = await Blog.create(payload);
    return result;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {

    const blogQuery = new QueryBuilder(Blog.find().populate("author"), query).search(blogSearchableFields).filter().sortBy()

    const result = await blogQuery.modelQuery;
    return result;
}

const updateBlogIntoDB = async (id: string, userEmail: string, payload: Partial<TBlog>) => {

    const user = await User.isUserExists(userEmail);

    if (!user) {
        throw new AppError(404, "User not found!")
    }

    // check blog is exists
    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError(404, "Blog not found!")
    }

    // check the owner

    if (blog.author.toString() !== user._id.toString()) {
        throw new AppError(403, "You are not authorized to update this blog!");
    }


    const result = await Blog.findByIdAndUpdate(id, payload, { new: true, runValidators: true })

    return result;
}

const deleteBlogFromDB = async (id: string) => {

    const isBlogExists = await Blog.findOne({ _id: id });

    if (!isBlogExists) {
        throw new AppError(404, "The blog is not exists!")
    }

    const result = await Blog.findByIdAndUpdate(id, { isDeleted: true }, { new: true, runValidators: true });

    return result;
}

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB,
};
