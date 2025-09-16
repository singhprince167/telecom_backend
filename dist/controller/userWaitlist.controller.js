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
exports.createUserWaitlist = void 0;
const sendMail_1 = require("../utils/sendMail");
const createUserWaitlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            res.status(400).json({ success: false, error: "All fields are required." });
            return;
        }
        yield (0, sendMail_1.sendTestEmail)(name, email, phone, `Waitlist Signup - ${name}`, `Hello ${name},<br/><br/>Thank you for joining our waitlist! We will notify you when we launch.<br/><br/>Phone: ${phone}<br/>Email: ${email}`);
        res.status(201).json({
            success: true,
            message: "Waitlist information received and email sent successfully.",
        });
    }
    catch (error) {
        console.error("❌ Error in waitlist controller:", error);
        res.status(500).json({
            success: false,
            error: "An error occurred while processing waitlist information.",
        });
    }
});
exports.createUserWaitlist = createUserWaitlist;
