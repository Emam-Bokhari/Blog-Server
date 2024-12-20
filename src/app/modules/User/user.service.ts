import { AppError } from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.model"

const registerUserIntoDB = async (payload: TUser) => {

    // check if the email is already save the database
    const isEmailExists = await User.findOne({ email: payload?.email })

    if (isEmailExists) {
        throw new AppError(400, "Email is already exists!")
    }

    const result = await User.create(payload);

    return result;
}

export const UserServices = {
    registerUserIntoDB
}