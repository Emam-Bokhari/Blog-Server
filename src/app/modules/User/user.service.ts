import config from "../../config";
import { AppError } from "../../errors/AppError";
import { Blog } from "../Blog/blog.model";
import { TLoginUser, TUser } from "./user.interface";
import { User } from "./user.model"
import jwt from "jsonwebtoken";

const registerUserIntoDB = async (payload: TUser) => {

    // check if the email is already save the database
    const user = await User.isUserExists(payload?.email);

    if (user) {
        throw new AppError(400, "Email is already exists!")
    }


    const result = await User.create(payload);

    return result;
}

const loginUser = async (payload: TLoginUser) => {
    const user = await User.isUserExists(payload?.email)

    // check if the use is exists
    if (!user) {
        throw new AppError(404, "The user is not found!")
    };

    // check if the use is blocked
    if (user.isBlocked === true) {
        throw new AppError(403, "Your account has been blocked.")
    }

    // check if the password is matched
    if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
        throw new AppError(401, "Invalid credentials!")
    }

    // create token

    const jwtPayload = {
        email: user?.email,
        role: user?.role,
    }


    const token = jwt.sign(jwtPayload, config.access_token_secret as string, { expiresIn: config.access_token_expires_in });



    return {
        token
    }
}

const blockUserIntoDB = async (userId: string, payload: Partial<TUser>) => {

    // check user is exits
    const user = await User.findOne({ _id: userId });

    if (!user) {
        throw new AppError(404, "User not found!")
    }

    // check thre role is user
    if (user?.role !== "user") {
        throw new AppError(403, "Only 'user' roles can be blocked!")
    }


    const result = await User.findByIdAndUpdate(userId, payload, { new: true, runValidators: true });

    return result;
}

const deleteBlogFromDB = async (id: string) => {

    // check blog is exists
    const blog = await Blog.findById(id);

    if (!blog) {
        throw new AppError(404, "Blog not found!")
    }

    const result = await Blog.findByIdAndUpdate(id, { isDeleted: true });

    return result;
}

export const UserServices = {
    registerUserIntoDB,
    loginUser,
    blockUserIntoDB,
    deleteBlogFromDB,
}