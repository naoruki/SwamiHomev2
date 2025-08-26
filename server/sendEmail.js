import express from "express";
import nodemailer from "nodemailer";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message, captchaToken } = req.body;

  // Verify reCAPTCHA
  try {
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
    const captchaRes = await axios.post(verifyURL);
    if (!captchaRes.data.success) {
      return res.status(400).json({ success: false, message: "reCAPTCHA failed" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "reCAPTCHA verification error" });
  }

  // Send email via Outlook SMTP
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: subject || "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

export default router;
