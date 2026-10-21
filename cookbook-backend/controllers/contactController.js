const { Resend } = require("resend");

// Resend initialize karein
const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Name, email, and message are required." });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "CookBook Contact <onboarding@resend.dev>", // Jab tak domain verify nahi hai
      to: ["sharmaajan49.95@gmail.com"], 
      replyTo: email, 
      subject: subject ? `Contact Form: ${subject}` : `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #ea580c;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ success: false, error: error.message });
    }

    res.status(200).json({ success: true, message: "Email sent successfully", data });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ success: false, error: "Failed to send email. Please try again later." });
  }
};

module.exports = { sendContactEmail };