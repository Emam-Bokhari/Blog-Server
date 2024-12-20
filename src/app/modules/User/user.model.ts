import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from "bcrypt"
import config from '../../config';

export const userSchema = new Schema<TUser>({
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
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
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



export const User = model<TUser>("User", userSchema);