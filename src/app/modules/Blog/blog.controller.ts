import { Request, Response } from "express";
import { BlogServices } from "./blog.service"

const createBlog = async (req: Request, res: Response) => {
    const result = await BlogServices.createBlogIntoDB(req.body);

    res.status(201).json({
        success: true,
        message: "Blog created successfully",
        statusCode: 201,
        data: result,
    })

}

export const BlogControllers = {
    createBlog,
}