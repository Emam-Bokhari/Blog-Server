import { Request, Response } from "express";
import { BlogServices } from "./blog.service"
import { sendResponse } from "../../utils/sendResponse";

const createBlog = async (req: Request, res: Response) => {
    try {
        const result = await BlogServices.createBlogIntoDB(req.body);

        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Blog created successfully",
            data: result,
        })
    } catch (err) {
        console.log(err)
    }

}

export const BlogControllers = {
    createBlog,
}