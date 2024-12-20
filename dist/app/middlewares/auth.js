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
exports.auth = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const user_model_1 = require("../modules/User/user.model");
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            throw new AppError_1.AppError(401, 'Invalid Credentials');
        }
        const token = authHeader.split(' ')[1];
        // console.log(token);
        if (!token) {
            throw new AppError_1.AppError(401, 'Invalid credentials');
        }
        // decoded token
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.access_token_secret);
        const { email, role } = decoded;
        // console.log(decoded)
        // check if the use is exists
        const user = yield user_model_1.User.isUserExists(email);
        if (!user) {
            throw new AppError_1.AppError(404, 'The user is not found!');
        }
        // check if the user is blocked
        if (user.isBlocked === true) {
            throw new AppError_1.AppError(403, 'Your account has been blocked.');
        }
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError_1.AppError(403, 'Insufficient permissions');
        }
        req.user = decoded;
        next();
    }));
};
exports.auth = auth;
