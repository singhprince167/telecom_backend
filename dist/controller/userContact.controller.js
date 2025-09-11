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
exports.createUserContact = void 0;
const sendMail_1 = require("../utils/sendMail");
const createUserContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, subject, message } = req.body;
        // ✅ Validate all fields
        if (!name || !email || !phone || !subject || !message) {
            res.status(400).json({ error: "All fields are required." });
            return; // stop execution here
        }
        // ✅ Send email via Nodemailer (with phone included)
        console.log("Phone received:", phone);
        yield (0, sendMail_1.sendTestEmail)(name, email, phone, subject, message);
        // ✅ Success response
        res.status(201).json({
            success: true,
            message: "Email sent successfully.",
        });
    }
    catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            success: false,
            error: "An error occurred while sending the email.",
        });
    }
});
exports.createUserContact = createUserContact;
