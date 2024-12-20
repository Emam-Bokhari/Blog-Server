import { RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";

const registerUser: RequestHandler = catchAsync(async (req, res) => {
    const result = await UserServices.registerUserIntoDB(req.body);
    const { _id, name, email } = result;

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User registered successfully",
        data: {
            _id,
            name,
            email
        },
    })
})

const loginUser: RequestHandler = catchAsync(async (req, res) => {
    const result = await UserServices.loginUser(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Login successful",
        data: result,
    })
})


const blockUser: RequestHandler = catchAsync(async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await UserServices.blockUserIntoDB(id, updatedData);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User blocked successfully",
        data: result,
    })
})

export const UserControllers = {
    registerUser,
    loginUser,
    blockUser
}