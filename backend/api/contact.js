const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// CORS - Allow ALL origins for testing
app.use(cors({
  origin: '*',  // ⚠️ Temporary, later restrict to your domain
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, company, projectType, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin email
    const adminMailOptions = {
      from: `"Zenova Lab" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || 'hello.zenova.co@gmail.com',
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Auto-reply
    const userMailOptions = {
      from: `"Zenova Lab" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting Zenova Lab, ${name}!`,
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong> "${message}"</p>
        <br>
        <p>Best regards,</p>
        <p><strong>Zenova Lab Team</strong></p>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again.'
    });
  }
});

// Export for Vercel
module.exports = app;