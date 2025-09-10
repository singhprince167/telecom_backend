"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContact = void 0;
const mongoose_1 = require("mongoose");
const userContactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        // match: /^\+?[1-9]\d{1,14}$/, 
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
});
exports.UserContact = (0, mongoose_1.model)('UserContact', userContactSchema);
