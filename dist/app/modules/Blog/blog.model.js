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
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [
            true,
            'Title is required. Please provide the necessary information.',
        ],
        trim: true,
    },
    content: {
        type: String,
        required: [
            true,
            'Content is required. Please provide the necessary information.',
        ],
        trim: true,
    },
    author: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'User',
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
// query middleware
blogSchema.pre('find', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.find({ isDeleted: { $ne: true } });
        next();
    });
});
blogSchema.pre('findOne', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.findOne({ isDeleted: { $ne: true } });
        next();
    });
});
// aggregate middleware
blogSchema.pre('aggregate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
        next();
    });
});
blogSchema.pre('aggregate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.pipeline().unshift({ $project: { isDeleted: 0 } });
        next();
    });
});
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);