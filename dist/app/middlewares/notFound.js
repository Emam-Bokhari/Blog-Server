"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
exports.notFound = ((req, res) => {
    return res.status(404).json({
        success: false,
        message: 'Route not found!',
        error: {
            path: `The request endpoint ${req.originalUrl} does not exists`,
            message: 'Route not found!',
        },
        stack: '',
    });
});
