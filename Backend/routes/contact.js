const express = require("express");
const router = express.Router();

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {

    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const response = await resend.emails.send({

      from: "Portfolio <onboarding@resend.dev>",

      to: process.env.EMAIL_TO,   // better than hardcoding

      reply_to: "sohambangar769@gmail.com",            // VERY IMPORTANT ⭐

      subject: `New message from ${name}`,

      html: `
        <h2>New Portfolio Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    console.log("Email sent:", response);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {

    console.error("Resend Error:", error);

    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });

  }
});

module.exports = router;