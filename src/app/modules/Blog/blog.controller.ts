import { Request, Response } from 'express';
import { BlogServices } from './blog.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const createBlog = catchAsync(async (req: Request, res: Response) => {
    const result = await BlogServices.createBlogIntoDB(req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Blog created successfully',
        data: result,
    });
});

export const BlogControllers = {
    createBlog,
};
