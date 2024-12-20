import { Request, Response } from "express";
import express from "express";


export const notFound = ((req: Request, res: Response) => {
    return res.status(404).json({
        success: false,
        message: "Route not found!",
        error: {
            path: `The request endpoint ${req.originalUrl} does not exists`,
            message: "Route not found!"
        },
        stack: ""
    })
}) as unknown as express.ErrorRequestHandler;

