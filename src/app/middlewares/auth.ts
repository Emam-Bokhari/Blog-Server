import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/User/user.interface";
import { catchAsync } from "../utils/catchAsync";

export const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        console.log(token);
    })
} 