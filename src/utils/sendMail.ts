import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ✅ ENV check
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Missing EMAIL_USER or EMAIL_PASS in .env file");
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Send mail function
const sendTestEmail = async (
  name: string,
  senderMail: string,
  phone: string,
  subject: string,
  message: string
): Promise<void> => {
  try {
    const info = await transporter.sendMail({
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
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};

export { transporter, sendTestEmail };
