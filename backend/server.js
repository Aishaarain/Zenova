const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174', 'https://zenovalab.it.com'],
  credentials: true
}));
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email transporter is ready!');
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Zenova Backend API is running!',
    endpoints: {
      test: '/api/test',
      contact: '/api/contact (POST)',
    }
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Contact endpoint - Sends TWO emails
app.post('/api/contact', async (req, res) => {
  const { name, email, company, projectType, budget, message } = req.body;

  console.log('Received contact form:', { name, email, projectType });

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name, email, and message are required' 
    });
  }

  try {
    // EMAIL 1: To Admin
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

    // EMAIL 2: Auto-reply to User
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

    // Send BOTH emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    console.log('Emails sent successfully to:', email);
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Email configured for: ${process.env.EMAIL_USER}`);
});