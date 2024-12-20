"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    res.status(data === null || data === void 0 ? void 0 : data.statusCode).json({
        success: data === null || data === void 0 ? void 0 : data.success,
        message: data === null || data === void 0 ? void 0 : data.message,
        statusCode: data === null || data === void 0 ? void 0 : data.statusCode,
        data: data === null || data === void 0 ? void 0 : data.data,
    });
};
exports.sendResponse = sendResponse;
