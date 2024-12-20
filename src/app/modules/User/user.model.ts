import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from "bcrypt"
import config from '../../config';

export const userSchema = new Schema<TUser, UserModel>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: 0,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        select: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,
    }
)

// hashed password before save the database
userSchema.pre("save", async function (next) {

    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds)
    )
    next()
})

userSchema.statics.isUserExists = async function (email: string) {
    return await User.findOne({ email: email })
}

userSchema.statics.isPasswordMatched = async function (plainTextPassword: string, hashPassword: string) {
    return await bcrypt.compare(plainTextPassword, hashPassword)
}


export const User = model<TUser, UserModel>("User", userSchema);

