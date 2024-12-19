
import { QueryBuilder } from '../../builder/QueryBuilder';
import { blogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
    const result = await Blog.create(payload);
    return result;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {

    const blogQuery = new QueryBuilder(Blog.find(), query).search(blogSearchableFields).filter().sortBy()

    const result = await blogQuery.modelQuery;
    return result;
}

const updateBlogIntoDB = async (blogId: string, payload: Partial<TBlog>) => {
    const result = await Blog.findByIdAndUpdate(blogId, payload, { new: true, runValidators: true })

    return result;
}

const deleteBlogFromDB = async (blogId: string) => {
    const result = await Blog.findByIdAndUpdate(blogId, { isDeleted: true }, { new: true, runValidators: true });

    return result;
}

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB,
};
