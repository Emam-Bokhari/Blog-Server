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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const config_1 = __importDefault(require("../../config"));
const AppError_1 = require("../../errors/AppError");
const blog_model_1 = require("../Blog/blog.model");
const user_model_1 = require("./user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // check if the email is already save the database
    const user = yield user_model_1.User.isUserExists(payload === null || payload === void 0 ? void 0 : payload.email);
    if (user) {
        throw new AppError_1.AppError(400, 'Email is already exists!');
    }
    const result = yield user_model_1.User.create(payload);
    return result;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(payload === null || payload === void 0 ? void 0 : payload.email);
    // check if the use is exists
    if (!user) {
        throw new AppError_1.AppError(404, 'The user is not found!');
    }
    // check if the use is blocked
    if (user.isBlocked === true) {
        throw new AppError_1.AppError(403, 'Your account has been blocked.');
    }
    // check if the password is matched
    if (!(yield user_model_1.User.isPasswordMatched(payload === null || payload === void 0 ? void 0 : payload.password, user === null || user === void 0 ? void 0 : user.password))) {
        throw new AppError_1.AppError(401, 'Invalid credentials!');
    }
    // create token
    const jwtPayload = {
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
    };
    const token = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.access_token_secret, {
        expiresIn: config_1.default.access_token_expires_in,
    });
    return {
        token,
    };
});
const blockUserIntoDB = (userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // check user is exits
    const user = yield user_model_1.User.findOne({ _id: userId });
    if (!user) {
        throw new AppError_1.AppError(404, 'User not found!');
    }
    // check thre role is user
    if ((user === null || user === void 0 ? void 0 : user.role) !== 'user') {
        throw new AppError_1.AppError(403, "Only 'user' roles can be blocked!");
    }
    const result = yield user_model_1.User.findByIdAndUpdate(userId, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBlogFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // check blog is exists
    const blog = yield blog_model_1.Blog.findById(id);
    if (!blog) {
        throw new AppError_1.AppError(404, 'Blog not found!');
    }
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, { isDeleted: true });
    return result;
});
exports.UserServices = {
    registerUserIntoDB,
    loginUser,
    blockUserIntoDB,
    deleteBlogFromDB,
};
