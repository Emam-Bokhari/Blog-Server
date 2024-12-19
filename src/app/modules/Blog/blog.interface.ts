import { Types } from "mongoose";

export type blogSchema = {
    title: string;
    content: string;
    author: Types.ObjectId;
}
