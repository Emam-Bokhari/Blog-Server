import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/User/user.interface";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../modules/User/user.model";

export const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        // console.log(token);
        if (!token) {
            throw new AppError(401, "You are unAthorized!")
        }

        // decoded token
        const decoded = jwt.verify(token, config.access_token_secret as string) as JwtPayload;

        const { email, role } = decoded;
        // console.log(decoded)

        // check if the use is exists
        const user = await User.isUserExists(email);
        if (!user) {
            throw new AppError(404, "The user is not found!")
        }

        // check if the user is blocked
        if (user.isBlocked === true) {
            throw new AppError(403, "Ths user is blocked!")
        }

        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(401, "You are unAthorized!")
        }

        req.user = decoded as JwtPayload

        next()
    })

} 