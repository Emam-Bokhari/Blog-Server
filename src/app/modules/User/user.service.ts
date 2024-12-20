import { TUser } from "./user.interface";
import { User } from "./user.model"

const registerUserIntoDB = async (payload: TUser) => {

    const isEmailExists = await User.findOne({ email: payload?.email })

    if (isEmailExists) {
        throw new Error("Email is already exists!")
    }

    const result = await User.create(payload);

    return result;
}

export const UserServices = {
    registerUserIntoDB
}