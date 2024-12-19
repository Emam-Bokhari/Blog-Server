import { RequestHandler } from 'express';
import { BlogServices } from './blog.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const createBlog: RequestHandler = catchAsync(async (req, res) => {
    const result = await BlogServices.createBlogIntoDB(req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Blog created successfully',
        data: result,
    });
});

const getAllBlogs: RequestHandler = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogsFromDB();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blogs fetched successfully",
        data: result,
    })
})

const updateBlog: RequestHandler = catchAsync(async (req, res) => {
    const blogId = req.params.id;
    const updatedData = req.body;
    const result = await BlogServices.updateBlogIntoDB(blogId, updatedData);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog updated successfully",
        data: result,
    })
})

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
    const blogId = req.params.id;
    await BlogServices.deleteBlogFromDB(blogId,)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog deleted successfully",
        data: null,
    })
})

export const BlogControllers = {
    createBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog,
};
