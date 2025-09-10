"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWaitlist = void 0;
const mongoose_1 = require("mongoose");
const UserWaitlistSchema = new mongoose_1.Schema({
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
});
exports.UserWaitlist = (0, mongoose_1.model)('UserWaitlist', UserWaitlistSchema);
