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
exports.sendTestEmail = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// ✅ ENV check
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ Missing EMAIL_USER or EMAIL_PASS in .env file");
}
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
exports.transporter = transporter;
// ✅ Send mail function
const sendTestEmail = (name, senderMail, phone, subject, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = yield transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: senderMail,
            to: process.env.SMTP_MAIL_RECEIVER,
            // to: [
            //   // "themahendra001@gmail.com",
            //   // "support@you-pi.in",
            //   "princekumarsingh167@gmail.com"
            // ],
            subject: subject || "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${senderMail}\nPhone: ${phone}\nMessage: ${message}`,
            html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${senderMail}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });
        console.log("✅ Email sent successfully: %s", info.messageId);
    }
    catch (error) {
        console.error("❌ Error sending email:", error);
        throw error;
    }
});
exports.sendTestEmail = sendTestEmail;
