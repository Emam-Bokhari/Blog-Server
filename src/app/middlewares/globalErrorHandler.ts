import { NextFunction, Request, Response } from "express";
import { TError } from "../interface/error";
// import { handleZodError } from "../errors/handleZodError";
import config from "../config";
import express from 'express';
import { ZodError } from "zod";
import { handleZodError } from "../errors/handleZodError";
import { handleDuplicateError } from "../errors/handleDuplicateError";
import { handleValidationError } from "../errors/handleValidationError";

export const globalErrorHandler = ((err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal server error";

    let error: TError = [{
        path: "",
        message: ""
    }];

    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err)

        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        error = simplifiedError?.error;
    } else if (err?.code === 11000) {
        const simplifiedError = handleDuplicateError(err);

        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        error = simplifiedError?.error;
    } else if (err?.name === "ValidationError") {
        const simplifiedError = handleValidationError(err);

        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        error = simplifiedError?.error
    }


    return res.status(statusCode).json({
        success: false,
        message: message,
        error: error,
        err: err,
        stack: config.node_env === "development" ? err?.stack : null,
    })


}) as unknown as express.ErrorRequestHandler;