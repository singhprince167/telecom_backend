import { Request, Response } from "express";
import { sendTestEmail } from "../utils/sendMail";

const createUserContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate all fields
    if (!name || !email || !phone || !subject || !message) {
       res.status(400).json({ error: "All fields are required." });
    }

    // Send email via Nodemailer, including phone
    console.log("Phone type:", typeof phone); // keep phone logging for debugging
    await sendTestEmail(name, email, phone, subject, message);

    // Respond success
    res.status(201).json({
      success: true,
      message: "Email sent successfully.",
    });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      error: "An error occurred while sending the email.",
    });
  }
};

export { createUserContact };
