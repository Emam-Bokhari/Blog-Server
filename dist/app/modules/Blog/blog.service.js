"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
const QueryBuilder_1 = require("../../builder/QueryBuilder");
const AppError_1 = require("../../errors/AppError");
const user_model_1 = require("../User/user.model");
const blog_constant_1 = require("./blog.constant");
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (payload, userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(userEmail);
    if (!user) {
        throw new AppError_1.AppError(404, 'User not found!');
    }
    const userId = user === null || user === void 0 ? void 0 : user._id;
    const blogData = Object.assign(Object.assign({}, payload), { author: userId });
    const result = yield blog_model_1.Blog.create(blogData);
    return result;
});
const getAllBlogsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const blogQuery = new QueryBuilder_1.QueryBuilder(blog_model_1.Blog.find().populate('author'), query)
        .search(blog_constant_1.blogSearchableFields)
        .filter()
        .sortBy();
    const result = yield blogQuery.modelQuery;
    // check no blogs found
    if (!result.length) {
        throw new AppError_1.AppError(404, 'No blogs found!');
    }
    return result;
});
const updateBlogIntoDB = (id, userEmail, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // check user is exists
    const user = yield user_model_1.User.isUserExists(userEmail);
    if (!user) {
        throw new AppError_1.AppError(403, 'User not found! You cannot update the blog.');
    }
    // check blog is exists
    const blog = yield blog_model_1.Blog.findById(id);
    if (!blog) {
        throw new AppError_1.AppError(404, 'Blog not found! You cannot update it.');
    }
    // check the owner
    if (blog.author.toString() !== user._id.toString()) {
        throw new AppError_1.AppError(403, 'You are not the owner of this blog and cannot update it.');
    }
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBlogFromDB = (id, userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    // check user is exists
    const user = yield user_model_1.User.isUserExists(userEmail);
    if (!user) {
        throw new AppError_1.AppError(403, 'User not found! You cannot delete the blog.');
    }
    // check blog is exists
    const blog = yield blog_model_1.Blog.findById(id);
    if (!blog) {
        throw new AppError_1.AppError(404, 'Blog not found!');
    }
    // check owner
    if (user._id.toString() !== (blog === null || blog === void 0 ? void 0 : blog.author.toString())) {
        throw new AppError_1.AppError(401, 'You are not authorized to delete this blog!');
    }
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, { isDeleted: true }, { new: true, runValidators: true });
    return result;
});
exports.BlogServices = {
    createBlogIntoDB,
    getAllBlogsFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB,
};
