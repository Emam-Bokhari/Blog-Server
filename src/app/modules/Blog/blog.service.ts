import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
    const result = await Blog.create(payload);
    return result;
};

const getAllBlogsFromDB = async () => {
    const result = await Blog.find();
    return result;
}

const updateBlogIntoDB = async (blogId: string, payload: Partial<TBlog>) => {
    const result = await Blog.findByIdAndUpdate(blogId, payload, { new: true, runValidators: true })

    return result;
}


export const BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    updateBlogIntoDB,
};
