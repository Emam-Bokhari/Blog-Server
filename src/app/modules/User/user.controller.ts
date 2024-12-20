import { RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";

const registerUser: RequestHandler = catchAsync(async (req, res) => {
    const result = await UserServices.registerUserIntoDB(req.body);
    // const {_id,name,email}=result;

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User registered successfully",
        data: result,
    })
})

export const UserControllers = {
    registerUser,
}