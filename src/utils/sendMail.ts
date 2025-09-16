import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

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

const sendTestEmail = async (
  name: string,
  senderMail: string,
  phone: string,
  subject: string,
  message: string
): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${senderMail}>`,
      to: process.env.SMTP_MAIL_RECEIVER || process.env.EMAIL_USER,
      subject: subject,
      text: `Name: ${name}\nEmail: ${senderMail}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
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
  }
};

export { transporter, sendTestEmail };
